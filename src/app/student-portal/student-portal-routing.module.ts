import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'result-search',
    loadChildren: () =>
      import('./pages/student-result-search/student-result-search.module').then(
        (module) => module.StudentResultSearchModule
      ),
  },
  {
    path: 'results-view',
    loadChildren: () =>
      import('./pages/student-results-page/student-results-page.module').then(
        (module) => module.StudentResultsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPortalRoutingModule {}
