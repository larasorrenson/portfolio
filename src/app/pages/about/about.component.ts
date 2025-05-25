import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { FooterComponent } from '../../footer/footer.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [FooterComponent, CommonModule],
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  titleVisible = false;
  bioVisible = false;
  skillsVisible = false;
  projectsVisible = false;
  educationVisible = false;

  ngOnInit() {
    setTimeout(() => this.titleVisible = true, 500);
    setTimeout(() => this.bioVisible = true, 1000);
    setTimeout(() => this.skillsVisible = true, 1500);
    setTimeout(() => this.projectsVisible = true, 2000);
    setTimeout(() => this.educationVisible = true, 2500);
  }
}
