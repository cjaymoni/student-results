import { Component, OnInit } from '@angular/core';
import { getUserFromLocalStorage } from '../../shared/utils/app-constants';

@Component({
  selector: 'app-staff-portal-layout',
  templateUrl: './staff-portal-layout.component.html',
  styleUrls: ['./staff-portal-layout.component.scss'],
})
export class StaffPortalLayoutComponent implements OnInit {
  isLoggedIn = getUserFromLocalStorage() || '';
  constructor() {}

  ngOnInit() {
    console.log(getUserFromLocalStorage());
  }
}
