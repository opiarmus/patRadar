import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category, Ring, Technology} from "../../shared/types/technology.types";

@Component({
  selector: 'app-technology-detail-dialog',
  templateUrl: './technology-detail-dialog.component.html',
  styleUrl: './technology-detail-dialog.component.css'
})
export class TechnologyDetailDialogComponent {
  protected readonly Category = Category;
  protected readonly Ring = Ring;
  @Input() technology!: Technology;
  @Output() closeDialog = new EventEmitter<void>();

  onCloseDialog() {
    this.closeDialog.emit();
  }

}
