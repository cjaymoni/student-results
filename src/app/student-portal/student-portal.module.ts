import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPortalLayoutComponent } from './student-portal-layout/student-portal-layout.component';
import { StudentPortalRoutingModule } from './student-portal-routing.module';

@NgModule({
  declarations: [StudentPortalLayoutComponent],
  imports: [CommonModule, StudentPortalRoutingModule],
  exports: [StudentPortalLayoutComponent],
})
export class StudentPortalModule {}
