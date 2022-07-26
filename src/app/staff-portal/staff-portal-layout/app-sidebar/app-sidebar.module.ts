import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidebarComponent } from './app-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AbilityModule } from '@casl/angular';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AbilityModule,
  ],
  declarations: [AppSidebarComponent],
  exports: [AppSidebarComponent],
})
export class AppSidebarModule {}
