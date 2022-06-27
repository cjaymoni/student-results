import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutesModule } from './login-routes.module';
import { LoginPageModule } from './login-page/login-page.module';

@NgModule({
  imports: [CommonModule, LoginRoutesModule, LoginPageModule],
  declarations: [],
})
export class LoginModule {}
