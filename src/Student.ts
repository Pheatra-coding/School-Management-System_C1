import { Person } from './Person';
import { Subject } from './Subject';
import { Timetable } from './Timetable';
import { Submission } from './Submission';
import { Grade } from './Grade';
import { Exam } from './Exam';

export class Student extends Person {
  subjects: Subject[] = [];
  timetable: Timetable[] = [];
  grades: Grade[] = [];
  exams: Exam [] = [];

  login(email: string, password: string): boolean {
    const success = this.getEmail() === email &&  this.getPassword() === password;
    console.log(success?`${this.getFullName()} logged in as student` : `Login failed for ${email}`);
    return success;
  }

  logout(): void {
      console.log(`${this.getFullName()} logged out`);
  }

  getTimetable(): Timetable[] {
    return this.timetable;
  }

  viewGrades(grade: Grade): void {
    // logic to view grades
    this.grades.push(grade);
    console.log(this.grades)
  }

  viewSchedule(exam:Exam): void {
    // logic to view schedule
    this.exams.push(exam);
    console.log(exam);
  }

  viewFeedback(): void {
    // logic to view feedback
  }

  assignSubmission(assignmentId: number, submission: Submission): void {
    // logic to assign a submission
  }

  finalizeSubmission(submission: Submission): void {
    // logic to finalize
  }
}
