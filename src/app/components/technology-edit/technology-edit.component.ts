import {Component, Input} from '@angular/core';
import {Category, CategoryLabels, Ring, RingLabels, Technology} from "../../shared/types/technology.types";
import {TechnologyService} from "../../services/technology/technology.service";
import {SnackbarService} from "../../services/snackbar/snackbar.service";

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
  isBusy: boolean = false;

  constructor(
    private technologyService: TechnologyService,
    private snackbarService: SnackbarService
  ) {  }

  publishTechnology() {
    this.isBusy = true;
    let technologyCopy: Technology = JSON.parse(JSON.stringify(this.technology));
    technologyCopy = {
      ...technologyCopy,
      published: true,
      publishedAt: new Date()
    }
    this.updateTechnology(technologyCopy);
    this.technology.published = true;
    this.technology.publishedAt = new Date();
  }

  saveTechnology() {
    this.isBusy = true;
    this.updateTechnology(this.technology);
  }

  private updateTechnology(updateTech: Technology) {
    this.technologyService.updateTechnology(updateTech)
      .subscribe({
        error: (error) => {
          console.log('something went wrong while updating technology: ', error);
          this.snackbarService.show('Error while updating technology');
          this.isBusy = false;
        },
        complete: () => {
          this.snackbarService.show('Technology updated!');
          this.isBusy = false;
        }
      });
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
