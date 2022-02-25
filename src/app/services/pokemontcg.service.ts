import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Autorization: '4237cea4-21a8-419c-838d-72fbc31eb7c7'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PokemontcgService {

  constructor( private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getData(): Observable<unknown> {
      let url = "https://api.pokemontcg.io/v2/cards";
      return this.http.get(url, httpOptions).pipe(
        catchError(this.handleError)
      );
  }

  getDataById (id: string): Observable<unknown> {
    let url = "https://api.pokemontcg.io/v2/cards/" + id;
      return this.http.get(url, httpOptions).pipe(
        catchError(this.handleError)
      );
  }  
}
