import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffPortalRoutingModule } from './staff-portal-routing.module';
import { LoginModule } from './pages/login/login.module';
import { StaffPortalLayoutModule } from './staff-portal-layout/staff-portal-layout.module';

@NgModule({
  imports: [
    CommonModule,
    StaffPortalLayoutModule,
    StaffPortalRoutingModule,
    LoginModule,
  ],
  exports: [StaffPortalLayoutModule],
})
export class StaffPortalModule {}
