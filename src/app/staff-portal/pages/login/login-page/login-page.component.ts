import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { NavigatorService } from 'src/app/shared/services/navigator.service';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private loginService: AuthenticationService,
    private navigator: NavigatorService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(5), Validators.email],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.value)
        .pipe()
        .subscribe((res: any) => {
          this.navigator.goToRoute(['/dashboard']);
        });
    }
  }
  serach() {}
}
