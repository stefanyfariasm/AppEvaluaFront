import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate, CanLoad  {

  constructor(private auth: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (localStorage.length == 0 || localStorage.getItem("log")) {
      return true;
    }
    this.router.navigateByUrl('/dashboard');
    return false;
  }


  canLoad(): boolean {
    if (localStorage.length == 0 || localStorage.getItem("log")) {
      return true;
    }

    return false;
  }

}
