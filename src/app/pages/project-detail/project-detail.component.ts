import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../services/project.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  safeVideoUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private sanitizer: DomSanitizer
  ) { }

  prevProject?: Project;
  nextProject?: Project;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProjectById(id).subscribe(p => {
        this.project = p;
        if (p?.link) {
          this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(p.link);
        }
      });

      this.projectService.getAdjacentProjects(id).subscribe(adj => {
        this.prevProject = adj.prev;
        this.nextProject = adj.next;
      });
    }
  }

  navigateToProject(id: string) {
    this.router.navigate(['/project', id]).then(() => {
      window.location.reload();
    });
  }

  goBack() {
    this.router.navigate(['/portfolio']);
  }
}
