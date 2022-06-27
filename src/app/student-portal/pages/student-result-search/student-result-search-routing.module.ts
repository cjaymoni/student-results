import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSearchHomeComponent } from './views/student-search-home/student-search-home.component';

const routes: Routes = [
  {
    path: '',
    component: StudentSearchHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentResultSearchRoutingModule {}
