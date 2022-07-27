import { Component, OnInit } from '@angular/core';
import { getUserFromLocalStorage } from '../../shared/utils/app-constants';
import { AuthenticationService } from '../pages/login/services/auth.service';

@Component({
  selector: 'app-staff-portal-layout',
  templateUrl: './staff-portal-layout.component.html',
  styleUrls: ['./staff-portal-layout.component.scss'],
})
export class StaffPortalLayoutComponent implements OnInit {
  isLoggedIn!: any;
  constructor(private loginService: AuthenticationService) {
    if (this.loginService.loggedInUser) {
      this.isLoggedIn = true;
    }
  }

  ngOnInit() {
    console.log(this.isLoggedIn);
  }
}
