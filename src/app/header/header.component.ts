import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TransfereService } from '../transfere.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  data:any;
  constructor(public service: AuthService, private router: Router,  private transfereService:TransfereService) { }

  ngOnInit() {
  
  }


  goStore(){
    this.data=this.transfereService.getData(); 
    console.log("HELLO Store");
    this.router.navigate(['/store', this.data.id]);
  };

  goProfile(){
    this.data=this.transfereService.getData(); 
    console.log("HELLO Profile");
    this.router.navigate(['/profile', this.data.id]);
  };

  goCommunity(){
    this.data=this.transfereService.getData(); 
    console.log("HELLO Community");
    this.router.navigate(['/community', this.data.id]);
  };


  logout(){
    this.service.logout();
    this.router.navigate(['/login']);
  this.data=""; 


  }

 

}
