import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Destinatario } from 'src/app/model/destinatario';
import { environment } from 'src/environments/environment';
import { RequestResponse } from '../common/request_response';

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  token:string;
  loginURL:string = environment.URL_API+"destinatario";
  
  
  constructor(private httpClient: HttpClient) { }

 getListado():Observable<RequestResponse>{
     return  this.httpClient.get<RequestResponse>(environment.URL_API+"destinatarios");
  }


  registro(destinatario:Destinatario): Observable<RequestResponse> {
    const data = {
      persona: {
          rut: destinatario.persona.rut
      , correo: destinatario.persona.correo
      , nombre: destinatario.persona.nombre
        , telefono: destinatario.persona.numeroTelefono
       }
      ,
      cuenta: {
          banco: destinatario.cuenta.banco
      , numero: destinatario.cuenta.numero
      , tipo: destinatario.cuenta.tipo
      }
    };
 
    return this.httpClient.post<RequestResponse>(this.loginURL, data)
      .pipe(
        catchError((err) => this.handleError(err)));
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
