import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffPortalLayoutComponent } from './staff-portal-layout.component';
import { AppSidebarModule } from './app-sidebar/app-sidebar.module';
import { AppHeaderModule } from './app-header/app-header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, AppSidebarModule, AppHeaderModule],
  declarations: [StaffPortalLayoutComponent],
  exports: [StaffPortalLayoutComponent],
})
export class StaffPortalLayoutModule {}
