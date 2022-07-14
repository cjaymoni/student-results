import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentResultSearchRoutingModule } from './student-result-search-routing.module';
import { RouterModule } from '@angular/router';
import { StudentSearchHomeModule } from './views/student-search-home/student-search-home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    StudentResultSearchRoutingModule,
    StudentSearchHomeModule,
  ],
})
export class StudentResultSearchModule {}
