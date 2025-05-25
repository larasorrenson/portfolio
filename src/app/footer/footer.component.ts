import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('btnRef') btnRef!: ElementRef<HTMLAnchorElement>;
  @ViewChild('spanRef') spanRef!: ElementRef<HTMLSpanElement>;

  ngAfterViewInit() {
  const button = this.btnRef.nativeElement;
  const spotlight = this.spanRef.nativeElement;

  const handleMouseMove = (event: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const left = `${(x / rect.width) * 100}%`;
    const top = `${(y / rect.height) * 100}%`;

    spotlight.animate({ left, top }, { duration: 250, fill: 'forwards' });
  };

  const handleMouseLeave = () => {
    spotlight.animate({ left: '50%', top: '50%' }, { duration: 100, fill: 'forwards' });
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  // Cleanup listeners on component destroy
  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
}

}
