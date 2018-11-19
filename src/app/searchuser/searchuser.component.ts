import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
  listofuser:User[]=[
    {id:1,username:'sam',password:'123'},
    {id:2,username:'asdf',password:'123'},
    {id:3,username:'nim',password:'123'},
    {id:4,username:'sai',password:'123'},
    {id:5,username:'sou',password:'123'},
    {id:6,username:'sama',password:'123'},
    {id:7,username:'asdfa',password:'123'},
    {id:8,username:'nima',password:'123'},
    {id:9,username:'saia',password:'123'},
    {id:10,username:'soua',password:'123'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
