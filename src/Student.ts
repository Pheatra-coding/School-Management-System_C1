import { Person } from './Person';
import { Subject } from './Subject';
import { Timetable } from './Timetable';
import { Submission } from './Submission';

export class Student extends Person {
  subjects: Subject[] = [];
  timetable: Timetable[] = [];

  login(email: string, password: string): boolean {
    console.log(`logged in as Student.`);
  }

  logout(): void {
    console.log(`logged out.`);
  }

  getTimetable(): Timetable[] {
    return this.timetable;
  }

  viewGrades(): void {
    // logic to view grades
  }

  viewSchedule(): void {
    // logic to view schedule
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
