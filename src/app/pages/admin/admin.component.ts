import {Component, ViewChild} from '@angular/core';
import {Technology} from "../../shared/types/technology.types";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  @ViewChild('editList') editListComponent: any;

  onAddNewTechnology(newTech: Technology) {
    this.editListComponent.addNewTechnology(newTech);
  }
}
