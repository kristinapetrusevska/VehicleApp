import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { UserToken } from '../models/usertoken.model';

import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {


    constructor(private _httpClient: HttpClient, private _router: Router) {
    }

    getUser(username: string, password: string): Observable<UserToken> {
        return this._httpClient.get<UserToken>('https://localhost:44361/api/Users?username=' + username + '&password=' + password).pipe(catchError(this.handleError));;
    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            'Backend returned code ${error.status}, ' +
            'body was: ${error.error}');
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
    
}







