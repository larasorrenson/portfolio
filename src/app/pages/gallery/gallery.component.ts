import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [FooterComponent, FormsModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  beforeImage = 'assets/images/original.jpg';
  afterImage = 'assets/images/edited.jpg';
  afterImageWidth = 50;
}
