import { AccType } from "./AccType";
import { Classroom } from "./Classroom";
import { Person } from "./Person";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";


export class Admin extends Person {
  private acc: AccType
  constructor(
    id: number,
    fullName: string,
    email: string,
    password: string,
  ) {
    super(id,fullName, email, password);
    this.acc = AccType.ADMIN;
  }

  login(email: string, password: string,): boolean {
    return this.getEmail() === email && this.getPassword() === password;
  }

  logout(): void {
    console.log(`${this.getFullName()} logged out.`);
  }

  createStudent(id: number, fullName: string, email: string, password: string):Student{
    return new Student(id, fullName, email, password);
  }

  createTeacher(id: number, fullName: string, email: string, password: string): Teacher {
    return new Teacher(id, fullName, email, password);
  }

  
  
  assignSubjectToTeacher(subject:Subject, teacher: Teacher): void {
  teacher.addSubject(subject);
  console.log(`${this.getFullName()} Assigned subject ${subject.getName()} to teacher ${teacher.getFullName()} teach`);
}


  assignSubject(): void {}
  assignTeacher(): void {}


   assignTeacherToClassroom(classroom: Classroom, teacher: Teacher): void {
    classroom.setTeacher([teacher]);
    console.log(`${this.getFullName()} assigned teacher ${teacher.getFullName()} to classroom ${classroom.getRoomName()}.`);
  }


  
}
