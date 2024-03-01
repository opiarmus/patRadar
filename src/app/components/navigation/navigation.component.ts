import { Component } from '@angular/core';
import { APP_TITLE } from "../../shared/constants";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faSatelliteDish} from "@fortawesome/free-solid-svg-icons/faSatelliteDish";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  title = APP_TITLE;
  environmentName = environment.envName;

  protected readonly faSatelliteDish = faSatelliteDish;
}
