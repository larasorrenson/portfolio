import { CommonModule } from '@angular/common';
import { Component, Input, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() before!: string;
  @Input() after!: string;

  @ViewChild('sliderWrapper', { static: true }) sliderWrapper!: ElementRef;

  handlePosition = 50; // %
  clipPath = 'inset(0 50% 0 0)';
  isDragging = false;

  ngOnInit() {
    this.updateClipPath();
  }

  startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.isDragging = true;

    const moveHandler = (e: MouseEvent | TouchEvent) => {
      if (!this.isDragging) return;

      const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const rect = this.sliderWrapper.nativeElement.getBoundingClientRect();
      const offsetX = clientX - rect.left;

      let percentage = (offsetX / rect.width) * 100;
      percentage = Math.max(0, Math.min(percentage, 100));

      this.handlePosition = percentage;
      this.updateClipPath();
    };

    const stopHandler = () => {
      this.isDragging = false;
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', stopHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('touchend', stopHandler);
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', stopHandler);
    window.addEventListener('touchmove', moveHandler);
    window.addEventListener('touchend', stopHandler);
  }

  updateClipPath() {
    this.clipPath = `inset(0 ${100 - this.handlePosition}% 0 0)`;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateClipPath(); // Optional: could use to realign anything on resize
  }

  onMouseMove(event: MouseEvent) {
  this.updateSliderPosition(event.clientX);
}

onTouchMove(event: TouchEvent) {
  if (event.touches.length > 0) {
    this.updateSliderPosition(event.touches[0].clientX);
  }
}

private updateSliderPosition(clientX: number) {
  const rect = this.sliderWrapper.nativeElement.getBoundingClientRect();
  const offsetX = clientX - rect.left;

  let percentage = (offsetX / rect.width) * 100;
  percentage = Math.max(0, Math.min(percentage, 100));

  this.handlePosition = percentage;
  this.updateClipPath();
}

}
