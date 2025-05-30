import { Person } from './Person';
import { Subject } from './Subject';
import { Assignment } from './Assignment';

export class Teacher extends Person {
  subjects: Subject[] = [];

  login(): void {
    console.log(`logged in as Teacher.`);
  }

  logout(): void {
    console.log(`logged out.`);
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
}
