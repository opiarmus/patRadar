import { Component } from '@angular/core';
import {Technology} from "../../shared/types/technology.types";
import {TechnologyService} from "../../services/technology/technology.service";

@Component({
  selector: 'app-publish-technologies',
  templateUrl: './publish-technologies.component.html',
  styleUrl: './publish-technologies.component.css'
})
export class PublishTechnologiesComponent {
  technologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) {  }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
      .subscribe(technologies => this.technologies = technologies);
  }

}
