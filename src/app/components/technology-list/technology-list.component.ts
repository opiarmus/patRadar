import {Component, EventEmitter, Output} from '@angular/core';
import {Category, Ring, Technology} from "../../shared/types/technology.types";
import {TechnologyService} from "../../services/technology/technology.service";

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

  constructor(private technologyService: TechnologyService) {  }

  ngOnInit() {
    this.technologies = this.technologyService.getTechnologies().filter(t => t.published)
  }
  selectTechnology(tech: Technology) {
    this.technologySelected.emit(tech);
  }
}
