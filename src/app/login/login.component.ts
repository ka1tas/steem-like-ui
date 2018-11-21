import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../login/username.validators';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';
import {AuthService} from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


usergame:any;
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

  add(userName: string, passWord: string){
    

    // The server will generate the id for this new login 
    const newUser: Login = { userName, passWord } as Login;

    let json = JSON.stringify({
      userName: userName,
      password: passWord
    });

    this.loginService.addUser(json)
      .subscribe(data => 
        {
          this.usergame=data;
          console.log(this.usergame);
          console.log(userName);
          console.log(this.usergame.user.userName);
          console.log(this.usergame.game[0].name);
          console.log(this.usergame.game[0]);



        

        

      if(this.usergame.user.userName==userName){
        console.log("checked true");
              this.service.login();
              console.log("this.service.isLoggedIn:"+this.service.isLoggedIn);
            this.router.navigate(['/store']);
            console.log("after navigate");
        }
        else{
          
          console.log("Wrong username or password");
        this.router.navigate(['/login']);
        return false;
        } 
      }
      );
     


      

  } 

      

  } 






