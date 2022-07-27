import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, Observable, take } from 'rxjs';
import { AuthenticationService } from 'src/app/staff-portal/pages/login/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userIsLoggedIn = this.loginService.loggedInUser;
    if (userIsLoggedIn) {
      if (
        route.data['roles'] &&
        route.data['roles'].indexOf(userIsLoggedIn.usertype) === -1
      ) {
        // role not authorised so redirect to home page
        this.router.navigate(['/login']);
        return false;
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
