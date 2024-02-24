import { Component } from '@angular/core';
import {Technology} from "../../shared/types/technology.types";
import {TechnologyService} from "../../services/technology/technology.service";

@Component({
  selector: 'app-publish-technologies',
  templateUrl: './publish-technologies.component.html',
  styleUrl: './publish-technologies.component.css'
})
export class PublishTechnologiesComponent {
  unpublishedTechnologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) {  }

  ngOnInit(): void {
    this.unpublishedTechnologies = this.technologyService.getTechnologies().filter(tech => !tech.published);
  }

}
