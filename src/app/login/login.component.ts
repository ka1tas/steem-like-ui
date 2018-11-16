import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../login/username.validators';
import { Router } from '@angular/router';



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

  constructor(private router: Router) { }

  ngOnInit() {
  }
  add(){
    


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





