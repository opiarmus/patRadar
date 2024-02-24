import { Component } from '@angular/core';
import {SnackbarService} from "../../services/snackbar.service";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent {
  message = '';
  visible = false;

  constructor(private snackbarService: SnackbarService) {  }

  ngOnInit(): void {
    this.snackbarService.getMessage().subscribe({
      next: message => {
        this.message = message;
        this.visible = true;

        setTimeout(() => {
          this.visible = false;
        }, 3000);
      }
    });
  }

}
