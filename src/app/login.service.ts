import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = "/steem/app/rest/authenticate";

  constructor( private http: HttpClient) { }
  
  addUser (json): Observable<any> {
    return this.http.post<any>(this.url, json, httpOptions);
  }
  

}
