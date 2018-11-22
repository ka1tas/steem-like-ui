import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransfereService {

 
  constructor(
    private router:Router
  ) { 
    console.log("transfere service constructor");
  }

  private data;

  setData(data){
    this.data = data;
    console.log("data in transfer");
    console.log(data);
  }

  getData(){
    console.log(this.data);
    return this.data;
  }

  

}