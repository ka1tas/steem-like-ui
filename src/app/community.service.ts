import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-type':'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class CommunityService {


  url: string ="/steem/rest/post/postlist";
  url1 : string ="/steem/rest/comment/commentlist";
  url2: string ="/steem/rest/user/list";
  url3: string ="/steem/rest/comment/addcomment";

  constructor(private http: HttpClient) { }

  getPosts() : Observable<any[]> {
    return this.http.get<any[]>(this.url).catch(this.errorHandler);
  
  }

  addComment(json): Observable<any> {
    return this.http.post<any>(this.url3, json, httpOptions);
  
}

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message);
  }
}
