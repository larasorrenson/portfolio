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

  constructor(private router: Router) {}

  projects = [
    {
      image: '',
      name: 'When Hippos Fly',
      link: '/project/whenHipposFly'
    },
    {
      image: '',
      name: 'Running Out of Love',
      link: '/project/runningOutOfLove'
    },
    {
      image: '',
      name: 'Paddington House',
      link: '/project/paddingtonHouse'
    },
    {
      image: '',
      name: 'Boba Tea Chicken',
      link: '/project/bobaTeaChicken'
    },
    {
      image: '',
      name: 'Unto Death',
      link: '/project/untoDeath'
    },
    {
      image: '',
      name: 'Recounting the Bruises',
      link: '/project/recountingTheBruises'
    },
    {
      image: '',
      name: 'Ticket NO.42',
      link: '/project/ticketNo42'
    },
    {
      image: '',
      name: 'Toxic Shock',
      link: '/project/toxicShock'
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
