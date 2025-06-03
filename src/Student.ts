import { Person } from './Person';
import { Subject } from './Subject';
import { Timetable } from './Timetable';
import { Submission } from './Submission';
import { Assignment } from './Assignment';
import { Grade } from './Grade';
import { Exam } from './Exam';

export class Student extends Person {
  subjects: Subject[] = [];
  timetable: Timetable[] = [];
  assignments: Assignment[] = [];
  submissions: Submission[] = [];
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

public startAssignmentSubmission(assignment: Assignment): Submission {
    const submissionId = this.submissions.length + 1;
    const newSubmission = new Submission(submissionId, this, assignment, "", new Date(), "draft");
    this.submissions.push(newSubmission);
    assignment.addSubmission(newSubmission); // <-- This links both sides
    console.log(`Student ${this.getFullName()} started assignment submission for "${assignment.getTitle()}"`);
    return newSubmission;
}


  public finalizeSubmission(submission: Submission, content: string): void {
    submission.setContent(content);
    submission.submit();
    console.log(`Student ${this.getFullName()} finalized submission for "${submission.getAssignment().getTitle()}" with content: "${content}"`);
  }

  public displayInfo(): void {
  console.log(`Student: ${this.getFullName()}`);
  console.log("Subjects:");
  this.subjects.forEach(sub => {
    console.log(`- ${sub.getName()} | Teacher: ${sub.getTeacher().getFullName()} | Classroom: ${sub.getClassroom().getRoomName()}`);
    console.log("  Assignments:");
    sub.getAssignments().forEach(ass => {
      console.log(`   • ${ass.getTitle()} (Due: ${ass.getDueDate().toISOString().split("T")[0]})`);
    });
  });


}


}
