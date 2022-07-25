export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  usertype: Role;
  token?: string;
  name?: string;
}

export enum Role {
  User = 'User',
  Admin = 'Admin',
  Instructor = 'Instructor',
  AcademicSecretary = 'Academic Secretary',
  Director = 'Director',
  CourseCordinator = 'Course Cordinator',
}
