import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuth().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/signin']).catch( (error) => {
          console.log(error);
        });
        return false;
      }
    });
  }

}
