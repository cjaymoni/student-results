import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { Role } from '../login/models/auth.model';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
    pathMatch: 'full',
    // data: { roles: [Role.Admin] },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutesModule {}
