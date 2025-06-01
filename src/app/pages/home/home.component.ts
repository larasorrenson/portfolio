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
      link: '/project/WhenHipposFly'
    },
    {
      image: '',
      name: 'Running Out of Love',
      link: '/project/RunningOutOfLove'
    },
    {
      image: '',
      name: 'Paddington House',
      link: '/project/PaddingtonHouse'
    },
    {
      image: '',
      name: 'Boba Tea Chicken',
      link: '/project/BobaTeaChicken'
    },
    {
      image: '',
      name: 'Unto Death',
      link: '/project/UntoDeath'
    },
    {
      image: '',
      name: 'Recounting the Bruises',
      link: '/project/RecountingTheBruises'
    },
    {
      image: '',
      name: 'Ticket NO.42',
      link: '/project/TicketNo42'
    },
    {
      image: '',
      name: 'Toxic Shock',
      link: '/project/ToxicShock'
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
    this.router.navigate(['/portfolio']);
  }

  navToProject(path: string) {
    this.router.navigate([path]);
  }
}
