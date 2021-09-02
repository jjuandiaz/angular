import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RequestResponse } from '../common/request_response';

 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token:string;
  loginURL:string = environment.URL_API+"login";
  
  
  constructor(private router: Router,private httpClient: HttpClient) { }


  login(email: string, password: string): Observable<RequestResponse> {
    const data = { email: email, password: password };

    return this.httpClient.post<RequestResponse>(this.loginURL, data)
      .pipe(
        catchError((err) => this.handleError(err)));
  }

  isAuth() {
    const  token:any = sessionStorage.getItem('token') ;
    return token != null;
  }

  logout() {
      sessionStorage.removeItem("token"); 
      this.router.navigate(['login']); 
  }

  private handleError(error: HttpErrorResponse)
  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.warn('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.warn(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(error.error.message);
  } 
 
}
