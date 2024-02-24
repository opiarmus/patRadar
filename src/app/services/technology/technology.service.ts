import { Injectable } from '@angular/core';
import {DUMMY_TECHS, Technology} from "../../shared/types/technology.types";

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private technologies: Technology[] = DUMMY_TECHS;

  constructor() { }

  getTechnologies(): Technology[] {
    return this.technologies;
  }

  getTechnology(id: number): Technology | null {
    const technology = this.technologies.find(tech => tech.id === id);
    return technology ?? null;
  }

  addTechnology(technology: Technology): void {
    this.technologies.push(technology);
  }

}
