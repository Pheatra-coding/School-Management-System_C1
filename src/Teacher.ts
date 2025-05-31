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

  gradeAssignment(assignment: Assignment, student: Student, score: number, feedback: string = "", exam: Exam | null = null): void {
    // grading logic
    if (score < 0 || score> 1000){
      console.log("score. Must be between 0 and 100.");
    }
    const gradeId = this.grades.length + 1;
    const grade = new Grade(gradeId, assignment, student, score, feedback, exam);
    this.grades.push(grade);

    console.log(`Teacher ${this.getFullName()} graded ${student.getFullName()}'s assignment "${assignment.getTitle()}" with score ${score}/100 and feedback: "${feedback}"`);

  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  getSubjects(): Subject[] {
    return this.subjects;
  }
}
