import {Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Category, CategoryLabels, Ring, RingLabels, Technology} from "../../shared/types/technology.types";
import {SnackbarService} from "../../services/snackbar/snackbar.service";
import {TechnologyService} from "../../services/technology/technology.service";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

interface FormValues {
  name: string,
  category: string,
  ring: string,
  description: string,
  classification: string,
  publish: boolean,
}
@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrl: './technology-form.component.css'
})
export class TechnologyFormComponent {

  @Output() addedTechnology = new EventEmitter<Technology>();

  technologyForm!: FormGroup;
  // @ts-ignore
  categories: Category[] = Object.values(Category).filter(value => typeof value === 'number');
  categoryLabels = CategoryLabels;
  // @ts-ignore
  rings: Ring[] = Object.values(Ring).filter(value => typeof value === 'number');
  ringLabels = RingLabels;
  preFilledForm = {
    name: '',
    category: Category.Tools,
    ring: Ring.NotAssigned,
    description: '',
    classification: '',
  }

  submitted = false;
  panelOpen: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private snackbarService: SnackbarService,
              private technologyService: TechnologyService) {  }

  ngOnInit() {
    this.technologyForm = this.formBuilder.group({
      name: ["", Validators.required],
      category: [Category.Tools, Validators.required],
      ring: [Ring.NotAssigned],
      description: ["", Validators.required],
      classification: [""],
      publish: [false],
    });
  }

  onSubmit(data: FormValues) {
    this.submitted = true;
    if (this.technologyForm.invalid) {
      this.snackbarService.show('The form is invalid.');
      return;
    }
    let newTech = this.getTechnologyFromFormValues(data);
    this.technologyService.addTechnology(newTech)
      .subscribe({
        next: (response) => {
          newTech._id = response._id;
        },
        error: (error) => {
          console.log('something went wrong while adding technology: ', error);
          this.snackbarService.show('Error while creating technology');
        },
        complete: () => {
          this.technologyForm.reset(this.preFilledForm);
          this.submitted = false;
          this.addedTechnology.emit(newTech);
          this.snackbarService.show('New technology created!');
        }
      });
  }

  private getTechnologyFromFormValues(values: FormValues): Technology {
    // @ts-ignore
    return {
      published: false,
      createdAt: new Date(),
      classification: values.classification,
      ring: parseInt(values.ring) as Ring,
      description: values.description,
      category: parseInt(values.category) as Category,
      name: values.name,
      creatorName: 'patstein', // TODO: replace with actual current user
      creatorId: '65db683b399e2053d7ef20f6', // TODO: replace with actual current user
    };
  }

  protected readonly faPlus = faPlus;
}
