import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  Routes,
} from '@angular/router';
import { IPageItems, Pages } from '../utils/app-constants';
@Injectable({
  providedIn: 'root',
})
export class NavigatorService {
  constructor(
    private router: Router,
    private location: Location,
    public readonly activatedRoute: ActivatedRoute
  ) {}

  goBack() {
    if (this.router.navigated) {
      this.location.back();
    } else {
      this.goToRoute(['/']);
    }
  }

  goToRoute(route: any[]) {
    this.router.navigate(route);
  }

  gotoHomepage() {
    this.goToRoute(['/home']);
  }
  gotoLandingpage() {
    this.goToRoute(['/']);
  }
  auth = new AuthRoutes(this.router);
}

class AppRoutesConfig {
  constructor(protected page: IPageItems, protected router: Router) {}

  goTo(route: string[]) {
    this.router.navigate([...route]);
  }
}

class AuthRoutes extends AppRoutesConfig {
  constructor(router: Router) {
    super(Pages['Auth'], router);
  }
  goToLogin() {
    this.router.navigate([Pages.Login]);
  }
}
