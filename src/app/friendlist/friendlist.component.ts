import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friends: User[] = [{id:1,username:"Beast_Whisperer",password:"12345"},{id:2,username:"Counter",password:"ram123"},{id:3,username:"saikat",password:"12345" },{id:4, username:"awptimusKs", password:"12345"}];

}
