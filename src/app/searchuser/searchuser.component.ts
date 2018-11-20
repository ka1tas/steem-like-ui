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
    {id:11,username:'sama',password:'123'},
    {id:12,username:'asdfa',password:'123'},
    {id:13,username:'nima',password:'123'},
    {id:14,username:'saia',password:'123'},
    {id:15,username:'soua',password:'123'},
    {id:16,username:'samaa',password:'123'},
    {id:17,username:'asdfaa',password:'123'},
    {id:18,username:'nimaa',password:'123'},
    {id:19,username:'saiaa',password:'123'},
    {id:20,username:'souaa',password:'123'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
