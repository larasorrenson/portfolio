import { Component, ViewChild, ElementRef } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ImageSliderComponent } from '../../image-slider/image-slider.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, ImageSliderComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

  projects = [
    {
      image: 'assets/images/stills/h1.png',
      name: 'When Hippos Fly',
      link: '/project/WhenHipposFly'
    },
    {
      image: 'assets/images/stills/r2.png',
      name: 'Running Out of Love',
      link: '/project/RunningOutOfLove'
    },
    {
      image: 'assets/images/stills/p1.png',
      name: 'Paddington House',
      link: '/project/PaddingtonHouse'
    },
    {
      image: 'assets/images/stills/b1.png',
      name: 'Boba Tea Chicken',
      link: '/project/BobaTeaChicken'
    },
    {
      image: 'assets/images/colourgrading/colour_SCARYCG.png',
      name: 'Unto Death',
      link: '/project/UntoDeath'
    },
    {
      image: 'assets/images/colourgrading/colour_SCARYCG.png',
      name: 'Recounting the Bruises',
      link: '/project/RecountingTheBruises'
    },
    {
      image: 'assets/images/stills/r2.png',
      name: 'Ticket NO.42',
      link: '/project/TicketNo42'
    },
    {
      image: 'assets/images/stills/t1.png',
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
