import {Component, EventEmitter, Output} from '@angular/core';
import {Category, DUMMY_TECHS, Ring, Technology} from "../../shared/types/technology.types";

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrl: './technology-list.component.css'
})
export class TechnologyListComponent {

  protected readonly Category = Category;
  protected readonly Ring = Ring;
  technologies: Technology[] = [];
  @Output() technologySelected = new EventEmitter<Technology>();

  constructor() {  }

  ngOnInit() {
    this.technologies = DUMMY_TECHS.filter(t => t.published)
  }
  selectTechnology(tech: Technology) {
    this.technologySelected.emit(tech);
  }
  getShortDateString(date: Date) {
    return date.toLocaleDateString('de-CH');
  }
}
