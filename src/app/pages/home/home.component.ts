import { Component, ViewChild, ElementRef } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ImageSliderComponent } from '../../image-slider/image-slider.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, ImageSliderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;
  constructor(
    private router: Router
  ) { }

  projects = [
    {
      image: 'assets/images/image1.jpg',
      name: 'Project One',
      link: '/project/project-1'
    },
    {
      image: 'assets/images/image1.jpg',
      name: 'Project Two',
      link: '/project/project-2'
    },
    {
      image: 'assets/images/image1.jpg',
      name: 'Project Three',
      link: '/project/project-3'
    },
    {
      image: 'assets/images/image1.jpg',
      name: 'Project Four',
      link: '/project/project-4'
    }
  ];


  scrollCarousel(direction: 'left' | 'right') {
    const carousel = this.carouselRef.nativeElement;
    const scrollAmount = 300;
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  navToGallery() {
    this.router.navigate(['/gallery']);
  }

  navToProject(path: string) {
    this.router.navigate([path]);
  }

}
