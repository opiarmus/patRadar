import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackbarSubject = new Subject<string>();

  constructor() { }

  show(message: string) {
    this.snackbarSubject.next(message);
  }

  getMessage() {
    return this.snackbarSubject.asObservable();
  }
}
