import { Component } from '@angular/core';
import {Technology} from "../../shared/types/technology.types";
import {TechnologyService} from "../../services/technology/technology.service";

@Component({
  selector: 'app-technology-edit-list',
  templateUrl: './technology-edit-list.component.html',
  styleUrl: './technology-edit-list.component.css'
})
export class TechnologyEditListComponent {

  technologies: Technology[] | null = null;
  searchTerm: string = '';
  panelOpen: boolean = false;

  constructor(private technologyService: TechnologyService) {  }

  ngOnInit(): void {
    this.getTechnologies();
  }

  private getTechnologies() {
    this.technologyService.getTechnologies()
      .subscribe(technologies => this.technologies = technologies);
  }

  get filteredTechnologies(): Technology[] {
    if (!this.technologies || !this.searchTerm.trim()) {
      return this.technologies || [];
    }
    const searchTermLower = this.searchTerm.trim().toLowerCase();
    return this.technologies.filter(tech =>
      tech.name.toLowerCase().includes(searchTermLower)
    );
  }

}
