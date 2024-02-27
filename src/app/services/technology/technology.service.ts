import { Injectable } from '@angular/core';
import {Ring, Technology} from "../../shared/types/technology.types";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {SnackbarService} from "../snackbar/snackbar.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private technologyUrl = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) { }

  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.technologyUrl)
      .pipe(
        tap(_ => console.log('fetched technologies')),
        catchError(this.handleError<Technology[]>('getTechnologies', []))
      );
  }

  getTechnology(id: string): Observable<Technology> {
    const url = `${this.technologyUrl}/${id}`;
    return this.http.get<Technology>(url)
      .pipe(
        tap(_ => console.log(`fetched technology id=${id}`)),
        catchError(this.handleError<Technology>(`getTechnology id=${id}`))
      );
  }

  addTechnology(technology: Technology): Observable<any> {
    return this.http.post(this.technologyUrl, technology, this.httpOptions)
      .pipe(
        tap(_ => console.log(`added technology`)),
        catchError(this.handleError<any>(`addTechnology`))
      );
  }

  updateTechnology(technology: Technology): Observable<any> {
    return this.http.put(this.technologyUrl, technology, this.httpOptions)
      .pipe(
        tap(_ => console.log('updated technology in service')),
        catchError(this.handleError<any>('updateTechnology'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  // private showMessage(message: string) {
  //   this.snackbarService.show(`Technology Service: ${message}`);
  // }
}
