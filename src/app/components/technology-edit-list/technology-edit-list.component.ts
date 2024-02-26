import {Component} from '@angular/core';
import {Technology} from "../../shared/types/technology.types";
import {TechnologyService} from "../../services/technology/technology.service";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-technology-edit-list',
  templateUrl: './technology-edit-list.component.html',
  styleUrl: './technology-edit-list.component.css'
})
export class TechnologyEditListComponent {

  technologies: Technology[] | null = null;
  searchTerm: string = '';
  showOnlyUnpublished: boolean = false;
  panelOpen: boolean = false;

  constructor(private technologyService: TechnologyService) {  }

  ngOnInit(): void {
    this.getTechnologies();
  }

  private getTechnologies() {
    this.technologyService.getTechnologies()
      .subscribe(technologies =>
        this.technologies = technologies
          .sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
      );
  }

  addNewTechnology(newTech: Technology) {
    if (this.technologies) {
      this.technologies.unshift(newTech);
    }
  }

  get filteredTechnologies(): Technology[] {
    if (!this.technologies) {
      return [];
    }
    const searchTermLower = this.searchTerm.trim().toLowerCase();
    return this.technologies.filter(tech =>
      tech.name.toLowerCase().includes(searchTermLower) &&
      (this.showOnlyUnpublished ? !tech.published : true)
    );
  }

  protected readonly faPenToSquare = faPenToSquare;
}
