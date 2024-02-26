import {Component, Input} from '@angular/core';
import {Category, CategoryLabels, Ring, RingLabels, Technology} from "../../shared/types/technology.types";

@Component({
  selector: 'app-technology-edit',
  templateUrl: './technology-edit.component.html',
  styleUrl: './technology-edit.component.css'
})
export class TechnologyEditComponent {

  @Input() technology!: Technology;
  // @ts-ignore
  rings: Ring[] = Object.values(Ring).filter(value => typeof value === 'number');
  // @ts-ignore
  categories: Category[] = Object.values(Category).filter(value => typeof value === 'number');
  categoryLabels = CategoryLabels;
  ringLabels = RingLabels;

  publishTechnology() {

  }

  saveTechnology() {

  }

  get canBeSaved(): boolean {
    return this.technology.name.trim().length > 0 &&
      this.technology.description.trim().length > 0;
  }

  get canBePublished(): boolean {
    return this.canBeSaved &&
      this.technology.ring > Ring.NotAssigned &&
      this.technology.classification.trim().length > 0;
  }

}
