import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:any;
  user:any;
  constructor(private router: Router,  
    private route: ActivatedRoute,private http: HttpClient,
    public service: AuthService, private profileService: ProfileService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.profileService.getViewProfile(this.id).subscribe(
      data => {
        this.user = data;
    
      }
    );
 


  }
  friends: User [] = [{id:1,username:"Beast_Whisperer",password:"12345"},{id:2,username:"Counter",password:"ram123"},{id:3,username:"saikat",password:"12345" },{id:4, username:"awptimusKs", password:"12345"}];


}
