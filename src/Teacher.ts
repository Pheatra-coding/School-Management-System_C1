import { Person } from './Person';
import { Subject } from './Subject';
import { Assignment } from './Assignment';
import { AccType } from './AccType';
import { Material } from './Material';
import { Grade } from './Grade';
import { Exam } from './Exam';
import { Student } from './Student';

export class Teacher extends Person {
  subjects: Subject[] = [];
  private acc: AccType;
  private grades: Grade[] = [];

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

  uploadMaterial(subject: Subject, fileName:string): void {
    // logic to upload material
    const materialId  = subject.getMaterials().length + 1;
    const material = new Material(materialId, subject, fileName);
    subject.addMaterial(material)
    console.log(`${this.getFullName()} uploaded "${fileName}" to subject ${subject.getName()} in classrom ${subject.getClassroom().getRoomName()}`);
  }

  uploadAssignment(subject: Subject, title: string, description:string, dueDate:Date): void {
    // logic to upload assignment
    const assignmentId = subject.getAssignments().length +1
    const assignment = new Assignment(assignmentId, subject, title, description, dueDate);
    subject.addAssignment(assignment);

    console.log(`Teacher ${this.getFullName()} uploaded assignment "${title}" to subject ${subject.getName()} with due date ${dueDate.toDateString()}`);
  }

  gradeAssignment(assignment: Assignment, student: Student, grade:Grade): void {
    // grading logic
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  getSubjects(): Subject[] {
    return this.subjects;
  }
}
