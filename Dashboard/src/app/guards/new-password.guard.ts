import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree, Router, CanLoad } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NewPasswordGuard implements CanActivate, CanLoad {
  constructor(private auth: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("email")) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

  canLoad(): boolean {
    if (localStorage.getItem("email")) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}
