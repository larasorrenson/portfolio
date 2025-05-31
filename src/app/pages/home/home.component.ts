import { Component, ViewChild, ElementRef } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ImageSliderComponent } from '../../image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;

  scrollCarousel(direction: 'left' | 'right') {
    const carousel = this.carouselRef.nativeElement;
    const scrollAmount = 300;
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
}
