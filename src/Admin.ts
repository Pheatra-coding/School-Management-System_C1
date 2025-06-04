import { AccType } from "./AccType";
import { Person } from "./Person";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export class Admin extends Person {
  private acc: AccType;
  constructor(id: number, fullName: string, email: string, password: string) {
    super(id, fullName, email, password);
    this.acc = AccType.ADMIN;
  }

  // ------------------------
  // Authentication Methods
  // ------------------------

  /**
   * Logs in the admin by verifying email and password.
   */
  login(email: string, password: string): boolean {
    return this.getEmail() === email && this.getPassword() === password;
  }

  /**
   * Logs out the admin and shows a message.
   */
  logout(): void {
    console.log(`${this.getFullName()} logged out.`);
  }

  // ------------------------
  // User Creation Methods
  // ------------------------

  /**
   * Creates and returns a new Student instance.
   */
  createStudent(
    id: number,
    fullName: string,
    email: string,
    password: string
  ): Student {
    return new Student(id, fullName, email, password);
  }

  /**
   * Creates and returns a new Teacher instance.
   */
  createTeacher(
    id: number,
    fullName: string,
    email: string,
    password: string
  ): Teacher {
    return new Teacher(id, fullName, email, password);
  }

  // ------------------------
  // Subject Assignment
  // ------------------------

  /**
   * Assigns a subject to a teacher.
   */
  assignSubjectToTeacher(subject: Subject, teacher: Teacher): void {
    teacher.addSubject(subject);
    console.log(
      `${this.getFullName()} Assigned subject ${subject.getName()} to teacher ${teacher.getFullName()} teach`
    );
  }

  /**
   * Reserved method for assigning subject - not implemented yet.
   */
  assignSubject(): void {}

  /**
   * Reserved method for assigning teacher - not implemented yet.
   */
  assignTeacher(): void {}
}
