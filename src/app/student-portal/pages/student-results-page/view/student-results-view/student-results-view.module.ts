import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentResultsViewComponent } from './student-results-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StudentResultsViewComponent],
  exports: [StudentResultsViewComponent],
})
export class StudentResultsViewModule {}
