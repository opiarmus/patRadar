import { Component } from '@angular/core';
import {Technology} from "../../shared/types/technology.types";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent {
  selectedTechnology: Technology | null = null;

  onTechnologySelected(tech: Technology) {
    this.selectedTechnology = tech;
  }
  closeTechnologyDialog() {
    this.selectedTechnology = null;
  }

}
