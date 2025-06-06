import { Person } from "./Person";
import { Subject } from "./Subject";
import { Timetable } from "./Timetable";
import { Submission } from "./Submission";
import { Assignment } from "./Assignment";
import { Grade } from "./Grade";
import { Exam } from "./Exam";

export class Student extends Person {
  subjects: Subject[] = [];
  timetable: Timetable[] = [];
  assignments: Assignment[] = [];
  submissions: Submission[] = [];
  grades: Grade[] = [];
  exams: Exam[] = [];

  /**
   * Allows student to log in if email and password match.
   */
  login(email: string, password: string): boolean {
    const success =
      this.getEmail() === email && this.getPassword() === password;
    console.log(
      success
        ? `${this.getFullName()} logged in as student`
        : `Login failed for ${email}`
    );
    return success;
  }

  /**
   * Logs out the student.
   */
  logout(): void {
    console.log(`${this.getFullName()} logged out`);
  }

  /**
   * Returns the student's timetable.
   */
  getTimetable(): Timetable[] {
    return this.timetable;
  }

  /**
   * Allows student to view and store a grade.
   */
  viewGrades(grade: Grade): void {
    this.grades.push(grade);
    console.log(this.grades);
  }

  /**
   * Adds and views an upcoming exam.
   */
  viewSchedule(exam: Exam): void {
    this.exams.push(exam);
    console.log(exam);
  }

  /**
   * Views feedback on all of the student's assignments.
   */
  viewFeedback(): void {
    if (this.assignments.length === 0) {
      console.log("No assignments found for this student.");
      return;
    }
    this.assignments.forEach((assignment) => {
      if (
        (assignment as any).feedbacks &&
        Array.isArray((assignment as any).feedbacks)
      ) {
        console.log(`Feedback for assignment "${assignment.getTitle()}":`);
        (assignment as any).feedbacks.forEach((fb: any, idx: number) => {
          console.log(
            `  ${idx + 1}. From: ${fb.student} | Date: ${
              fb.date instanceof Date ? fb.date.toLocaleString() : fb.date
            }`
          );
          console.log(`     "${fb.feedback}"`);
        });
      } else {
        console.log(
          `No feedback found for assignment "${assignment.getTitle()}".`
        );
      }
    });
  }

  /**
   * Allows the student to give feedback on an assignment.
   */
  giveFeedback(assignment: Assignment, feedback: string): void {
    if (!this.assignments.includes(assignment)) {
      console.log(
        `Cannot give feedback: Assignment "${assignment.getTitle()}" not found for student ${this.getFullName()}.`
      );
      return;
    }
    if (
      (assignment as any).feedbacks &&
      Array.isArray((assignment as any).feedbacks)
    ) {
      (assignment as any).feedbacks.push({
        student: this.getFullName(),
        feedback: feedback,
        date: new Date(),
      });
      console.log(
        `Feedback added to assignment "${assignment.getTitle()}": "${feedback}"`
      );
    } else {
      console.log(
        `Student ${this.getFullName()} gave feedback on "${assignment.getTitle()}": "${feedback}"`
      );
    }
  }

  /**
   * Starts a new assignment submission as a draft.
   */
  public startAssignmentSubmission(assignment: Assignment): Submission {
    const submissionId = this.submissions.length + 1;
    const newSubmission = new Submission(
      submissionId,
      this,
      assignment,
      "",
      new Date(),
      "draft"
    );
    this.submissions.push(newSubmission);
    assignment.addSubmission(newSubmission); // <-- This links both sides
    console.log(
      `Student ${this.getFullName()} started assignment submission for "${assignment.getTitle()}"`
    );
    return newSubmission;
  }

  /**
   * Finalizes the submission by setting content and changing its status to "submitted".
   */
  public finalizeSubmission(submission: Submission, content: string): void {
    submission.setContent(content);
    submission.submit();
    console.log(
      `Student ${this.getFullName()} finalized submission for "${submission
        .getAssignment()
        .getTitle()}" with content: "${content}"`
    );
  }

  /**
   * Displays full information about the student: subjects, teachers, rooms, and assignments.
   */
  public displayInfo(): void {
    console.log(`Student: ${this.getFullName()}`);
    console.log("Subjects:");
    this.subjects.forEach((sub) => {
      console.log(
        `- ${sub.getName()} | Teacher: ${sub
          .getTeacher()
          .getFullName()} | Classroom: ${sub.getClassroom().getRoomName()}`
      );
      console.log("  Assignments:");
      sub.getAssignments().forEach((ass) => {
        console.log(
          `   • ${ass.getTitle()} (Due: ${
            ass.getDueDate().toISOString().split("T")[0]
          })`
        );
      });
    });
  }
}
