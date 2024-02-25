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

  isOkToSave(technology: Technology) {
    return technology.name.trim() &&
      technology.description.trim()
  }

  isPublishable(technology: Technology) {
    return this.isOkToSave(technology) &&
      technology.ring > Ring.NotAssigned &&
      technology.classification.trim();
  }
}
