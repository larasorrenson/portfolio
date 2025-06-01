import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/projects.json').subscribe((data) => {
      this.projects = data;
      console.log(this.projects);
    });
  }
}
