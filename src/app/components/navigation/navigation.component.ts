import { Component } from '@angular/core';
import { APP_TITLE } from "../../shared/constants";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  title = APP_TITLE;

}
