import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'student-results-management';
  staffPortal: boolean = true;
  studentPortal: boolean = false;
}
