import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewModule } from './views/dashboard-view/dashboard-view.module';
import { DashboardRoutesModule } from './dashboard-routes.module';

@NgModule({
  imports: [CommonModule, DashboardViewModule, DashboardRoutesModule],
  declarations: [],
})
export class DashboardModule {}
