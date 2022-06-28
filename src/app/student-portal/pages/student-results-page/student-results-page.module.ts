import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentResultSearchRoutingModule } from './student-result-view-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, StudentResultSearchRoutingModule],
  declarations: [],
  exports: [],
})
export class StudentResultsPageModule {}
