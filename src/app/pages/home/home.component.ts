import { Component, ViewChild, ElementRef } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ImageSliderComponent } from '../../image-slider/image-slider.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, ImageSliderComponent, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLDivElement>;
  projects: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/projects.json').subscribe((data) => {
      this.projects = data;
    });
  }

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

  navToProject(id: string) {
    console.log(id)
    this.router.navigate(['/project/', id]);
}
}
