import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffPortalLayoutComponent } from './staff-portal-layout/staff-portal-layout.component';
import { StaffPortalRoutingModule } from './staff-portal-routing.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [StaffPortalLayoutComponent],
  imports: [CommonModule, StaffPortalRoutingModule, LoginModule],
  exports: [StaffPortalLayoutComponent],
})
export class StaffPortalModule {}
