import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url1: string ;
  url2:string;
  url3:string;
  constructor(private http: HttpClient) { }



  getViewPlus(id:number) : Observable<any[]> {

    this.url1= '/steem/app/rest/store/showplus?userId=';
    console.log(id);
    return this.http.get<any>(this.url1+id);
  } 

  getView() : Observable<any[]> {

    this.url2= '/steem/app/rest/store/show';
    
    return this.http.get<any>(this.url2);
  }

  getGamedetails(id:number) : Observable<any[]> {

    this.url3= '/steem/app/rest/store/showgame?userId=';
    console.log(id);
    return this.http.get<any>(this.url3+id);
  } 


}
