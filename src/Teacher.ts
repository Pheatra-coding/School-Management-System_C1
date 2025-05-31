import { Person } from './Person';
import { Subject } from './Subject';
import { Assignment } from './Assignment';
import { AccType } from './AccType';

export class Teacher extends Person {
  subjects: Subject[] = [];
  private acc: AccType;

  constructor(id: number, fullName: string, email: string, password: string) {
    super(id, fullName, email, password);
    this.acc = AccType.TEACHER;
  }

  login(email: string, password: string): boolean {
    const sucess = this.getEmail() === email && this.getPassword() === password;
    console.log(sucess?`${this.getFullName()} logged in as teacher` : `Login failed`);
    return sucess;
  }

  logout(): void {
    console.log(`${this.getFullName()} logged out`);
  }

  uploadMaterial(): void {
    // logic to upload material
  }

  uploadAssignment(): void {
    // logic to upload assignment
  }

  gradeAssignment(): void {
    // grading logic
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  getSubjects(): Subject[] {
    return this.subjects;
  }
}
