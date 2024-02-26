import { Component } from '@angular/core';
import {Technology} from "../../shared/types/technology.types";
import {ActivatedRoute} from "@angular/router";
import {TechnologyService} from "../../services/technology/technology.service";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent {
  selectedTechnology: Technology | null = null;

  constructor(private route: ActivatedRoute,
              private technologyService: TechnologyService) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.technologyService.getTechnology(id).subscribe(technology => {
          if (technology && technology.published) {
            this.selectedTechnology = technology;
          } else {
            console.log(`The technology with the id ${id} does not exist or is not published.`);
          }
        });
      }
    })
  }

  onTechnologySelected(tech: Technology) {
    this.selectedTechnology = tech;
  }
  closeTechnologyDialog() {
    this.selectedTechnology = null;
  }

}
