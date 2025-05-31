import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Project {
  id: string;
  title: string;
  type: string;
  roles: string;
  synopsis: string;
  image: string;
  gallery: string[];
  link: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private jsonUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.jsonUrl);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getAllProjects().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  getAdjacentProjects(currentId: string): Observable<{ prev?: Project; next?: Project }> {
    return this.getAllProjects().pipe(
      map(projects => {
        const index = projects.findIndex(p => p.id === currentId);
        return {
          prev: index > 0 ? projects[index - 1] : undefined,
          next: index < projects.length - 1 ? projects[index + 1] : undefined
        };
      })
    );
  }
}
