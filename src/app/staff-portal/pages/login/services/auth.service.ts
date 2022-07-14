import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Ability, AbilityBuilder } from '@casl/ability';
import { User } from '../models/auth.model';
import { ResourceService } from 'src/app/shared/services/resources.service';

const ENDPOINT = 'users';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends ResourceService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  public loggedInUser;

  constructor(
    private router: Router,
    http: HttpClient,
    private ability: Ability
  ) {
    super(http, ENDPOINT);
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject;
    this.loggedInUser = this.user['_value'];
    this.updateAbility(this.loggedInUser || []);

    // console.log(this.loggedInUser);
  }

  public get userValue(): User {
    return this.userSubject.value;
  }
  private updateAbility(user: any) {
    const { can, rules } = new AbilityBuilder(Ability);

    const userRole = user.usertype;
    switch (userRole) {
      case 'Director':
        can('view', 'Users');
        can('edit', 'Users');
        can('view', 'Results');
        can('edit', 'Results');
        can('view', 'Students');
        can('edit', 'Students');
        can('view', 'Instructors');
        can('add', 'Staff');

        can('edit', 'Instructors');
        can('view', 'Courses');
        can('edit', 'Courses');
        can('view', 'Modules');

        can('edit', 'Modules');
        can('view', 'Reports');
        can('edit', 'Reports');
        can('disable', 'all');

        break;

      case 'Course Cordinator':
        can('view', 'Courses');
        can('edit', 'Courses');
        can('view', 'Modules');
        can('edit', 'Modules');
        can('view', 'Instructors');
        can('edit', 'Instructors');
        can('view', 'Reports');
        can('edit', 'Reports');
        can('add', 'Module');
        break;

      case 'Academic Secretary':
        can('view', 'Students');
        can('edit', 'Students');
        can('view', 'Reports');
        can('edit', 'Reports');
        can('view', 'Results');
        can('edit', 'Results');
        can('upload', 'Grade');
        can('add', 'Student');
        can('add', 'Student Course');
        can('add', 'Module');
        can('add', 'Course');
        can('view', 'Courses');

        break;
      case 'Center Manager':
        can('view', 'Courses');
        can('edit', 'Courses');
        can('view', 'Modules');
        can('edit', 'Modules');
        can('view', 'Instructors');
        can('edit', 'Instructors');
        can('view', 'Reports');
        can('edit', 'Reports');
        break;

      case 'Instructor':
        can('view', 'Modules');
        can('view', 'Reports');
        can('generate', 'Reports');
        can('add', 'Results');
        can('view', 'Results');
        can('upload', 'Grade');
        break;

      case 'Admin':
        can('manage', 'all');
        console.log('super');
        break;

      default:
        can('read', 'all');
        break;
    }

    // if (userRole === 'Admin') {
    //   can('manage', 'all');
    //   console.log('super');
    // } else {
    //   can('read', 'all');
    // }

    this.ability.update(rules);
  }
  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  login(email: string, password: string) {
    return super
      .getResources(null, 'staffs/userLogin', true, {
        email: email,
        password: password,
      })
      .pipe(
        map((response: any) => {
          response.usertype = this.capitalizeFirstLetter(response.usertype);
          localStorage.setItem('user', JSON.stringify(response));
          this.userSubject.next(response);
          this.updateAbility(response);
          return console.log(response);
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.ability.update([]);
    window.location.assign('/login');
    // this.router.navigate(['/login']);
    logoutAlert();
  }
}
