

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService }      from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log("inside canActivate of guard");
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log("this.myService.isLoggedIn: "+this.service.isLoggedIn);
    if (this.service.isLoggedIn) { 
      return true; 
    }
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
} 
