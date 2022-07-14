import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-search-home',
  templateUrl: './student-search-home.component.html',
  styleUrls: ['./student-search-home.component.scss'],
})
export class StudentSearchHomeComponent implements OnInit {
  searchForm!: FormGroup;
  courseList!: any[];

  constructor(
    private fb: FormBuilder,
    // private courseService: CoursesService,
    // private resultService: ResultsService,

    private router: Router
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      student_id: ['', [Validators.required]],
      course_id: ['', [Validators.required]],
    });
    this.loadData();
  }

  loadData = () => {
    // this.courseService.getAllCourse().subscribe((courses:any) => {
    //   this.courseList = courses
    //     .filter((stud) => stud.status === 'Active')
    //     .map(({ id, course_name, course_level }) => ({
    //       id,
    //       course_name,
    //       course_level,
    //     }));
    // });
  };

  searchGrade() {
    var formValues = this.searchForm.getRawValue();
    var studentId = formValues.student_id;
    var courseId = formValues.course_id;
    localStorage.setItem('fetch_stud', studentId);
    localStorage.setItem('fetch_cors', courseId);
    localStorage.setItem('past_stud', studentId);
    localStorage.setItem('past_cors', courseId);
    // let currentResult = this.resultService.getResultByStudentIdAndCourse(
    //   studentId,
    //   courseId
    // );
    // let pastResult = this.resultService.getPastResultByStudentIdAndCourse(
    //   studentId,
    //   courseId
    // );
    // forkJoin([currentResult, pastResult]).subscribe((results) => {
    //   if (Object.keys(results[0]).length !== 0) {
    //     this.router.navigate(['/student-result']);
    //   } else if (Object.keys(results[1]).length !== 0) {
    //     this.router.navigate(['/student-past-result']);
    //   } else {
    //     errorAlert('Student Result not found');
    //   }
    // });
  }
}
