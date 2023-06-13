import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, CanLoad } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {
  constructor(private auth: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("usuario")) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }


  canLoad(): boolean {
    if (localStorage.getItem("usuario")) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}
