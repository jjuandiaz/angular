import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BancoResults } from './model/banco';
@Injectable({
  providedIn: 'root'
})
export class BancoService { 

  constructor(private httpClient: HttpClient) { }
  

  getListado():Observable<BancoResults>{
     return  this.httpClient.get<BancoResults>(environment.URL_API+"banks");
  }

}
