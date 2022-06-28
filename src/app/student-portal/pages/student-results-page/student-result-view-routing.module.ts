import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentResultsViewComponent } from './view/student-results-view/student-results-view.component';

const routes: Routes = [
  {
    path: '',
    component: StudentResultsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentResultSearchRoutingModule {}
