import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  friends: User[] = [{id:1,username:"Beast_Whisperer",password:"12345"},{id:2,username:"Counter",password:"ram123"},{id:3,username:"saikat",password:"12345" },{id:4, username:"awptimusKs", password:"12345"}];
}
