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

  addTechnology(technology: Technology): void {
    this.technologies.push(technology);
  }

}
