import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Category, CategoryLabels, DUMMY_TECHS, Ring, RingLabels, Technology} from "../../shared/types/technology.types";
import {DUMMY_USERS} from "../../shared/types/user.types";

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

  submitted = false;

  constructor(private formBuilder: FormBuilder) {  }

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
    console.log('trying to submit form with following: ', data);
    if (this.technologyForm.invalid) {
      console.log('form is invalid');
      return;
    }
    const newTech: Technology = {
      published: data.publish,
      createdAt: new Date(),
      creator: DUMMY_USERS[0],
      classification: data.classification,
      ring: parseInt(data.ring) as Ring,
      description: data.description,
      category: parseInt(data.category) as Category,
      name: data.name,
      id: DUMMY_TECHS.reduce((max, tech) => {
        return tech.id > max ? tech.id : max;
      }, 0)
    }

    DUMMY_TECHS.push(newTech);
    console.log('form submitted with new tech: ', newTech);
    console.log('all the dummies: ', DUMMY_TECHS);
  }

}
