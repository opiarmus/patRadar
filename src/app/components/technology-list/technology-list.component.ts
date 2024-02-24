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
    this.technologies = this.technologyService.getTechnologies()
      .filter(t => t.published)
      .sort((a, b) => a.ring < b.ring ? -1 : 1);
  }

  categoryKeys(): Array<string> {
    let keys = Object.keys(this.Category);
    return keys.slice(keys.length / 2);
  }

  selectTechnology(tech: Technology) {
    this.technologySelected.emit(tech);
  }

  getTechnologiesOfCategory(category: string) {
    const cat = Category[category as keyof typeof Category];
    console.log(cat);
    return this.technologies
      .filter(tech => tech.category === cat)
      .sort((a, b) => a.ring < b.ring ? -1 : 1);
  }
}
