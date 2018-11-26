import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url1: string ;
  url2:string;
  constructor(private http: HttpClient) { }



  getViewProfile(id:number) : Observable<any[]> {

    this.url1= '/steem/rest/profile/showProfile?userId=';
    console.log(id);
    return this.http.get<any>(this.url1+id);
    
  } 


}
