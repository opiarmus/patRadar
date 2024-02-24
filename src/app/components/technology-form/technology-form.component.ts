import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Category, CategoryLabels, DUMMY_TECHS, Ring, RingLabels, Technology} from "../../shared/types/technology.types";
import {DUMMY_USERS} from "../../shared/types/user.types";
import {SnackbarService} from "../../services/snackbar.service";

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
    publish: false,
  }

  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private snackbarService: SnackbarService) {  }

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
    DUMMY_TECHS.push(this.getTechnologyFromFormValues(data));
    this.technologyForm.reset(this.preFilledForm);
    this.submitted = false;
    this.snackbarService.show('New technology created!');
  }

  private getTechnologyFromFormValues(values: FormValues): Technology {
    return {
      published: values.publish,
      createdAt: new Date(),
      creator: DUMMY_USERS[0],
      classification: values.classification,
      ring: parseInt(values.ring) as Ring,
      description: values.description,
      category: parseInt(values.category) as Category,
      name: values.name,
      id: DUMMY_TECHS.reduce((max, tech) => {
        return tech.id > max ? tech.id : max;
      }, 0) + 1
    };
  }

}
