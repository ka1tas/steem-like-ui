import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../login/username.validators';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';
import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';
import { TransfereService } from '../transfere.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: any;
  json: any;

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


  public errorMessage;
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService,
    public service: AuthService,private transfereService:TransfereService) { }

  ngOnInit() {

  }

  add(userName: string, passWord: string) {


    // The server will generate the id for this new login 
    const newUser: Login = { userName, passWord } as Login;

    let json = JSON.stringify({
      userName: userName,
      password: passWord
    });

    this.loginService.addUser(json)
      .subscribe(data => {
        this.user = data;

        console.log(userName);

        if (this.user.userName != null) {
          console.log(userName);
          if (this.user.userName == userName) {
            console.log("checked true");
            this.service.login();
            console.log("this.service.isLoggedIn:" + this.service.isLoggedIn);
            this.router.navigate(['/store', this.user.id]);
            this.transfereService.setData(this.user);
            console.log("after navigate");
          }

        }

        else {

          console.log("Wrong username or password");
          alert("Wrong Username or Password!")
          this.router.navigate(['/login']);
          return false;
        }
      },
        error => {
          this.errorMessage = "System error or Contact Adminsitrator";
        }
      );

  }



}






