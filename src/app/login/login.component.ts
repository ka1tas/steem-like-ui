import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../login/username.validators';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';
import {AuthService} from './../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

json:any;

  form = new FormGroup({
    userName: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      UsernameValidators.cannotContainSpace
      ]),
    password: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15)]),
  });



  constructor(private http: HttpClient, private router: Router, private loginService: LoginService,
    public service: AuthService) { }

  ngOnInit() {

  }

user1:User={
  id:1,
  username:"kaitas",
  password:12345
}

  add(userName, passWord){
    
    if(userName==this.user1.username||passWord==this.user1.password){

      console.log("checked true");
            this.service.login();
              
            this.router.navigate(['/store']);
            console.log("after login");


    }

    /* console.log( this.form.value);
    this.json = this.form.value;
    this.loginService.addUser(this.json)
      .subscribe(data => 

      {if(data.authenticated){
        console.log("checked true");
              this.service.login();
              console.log("this.service.isLoggedIn:"+this.service.isLoggedIn);
            this.router.navigate(['/employee']);
            console.log("after navigate");
        }
        else{
          
          console.log("Wrong username or password");
        this.router.navigate(['/reactivelogin']);
        return false;
        }}

      );
 */

      

  } 
}





