import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {


  listOfUser:User[]=[
    {id:1,username:'Phoenix',password:'1234'},
    {id:2,username:'Kaitas',password:'2345'},
    {id:3,username:'Tony_Stark',password:'2345'},
    {id:4,username:'Hector',password:'2345'},
    {id:5,username:'Patrick',password:'6789'},
    {id:6,username:'AutoMatik',password:'888'},


  ]

  constructor() { }

  ngOnInit() {
  }

}
