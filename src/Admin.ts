import { AccType } from "./AccType";
import { Person } from "./Person";
import { Student } from "./Student";
import { Teacher } from "./Teacher";


export class Admin extends Person {
  constructor(
    id: number,
    fullName: string,
    email: string,
    password: string,
    private acc: AccType
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

  creareStudent(id: number, fullName: string, email: string, password: string):Student{
    return new Student(id, fullName, email, password);
  }

  createTeacher(id: number, fullName: string, email: string, password: string): Teacher {
    return new Teacher(id, fullName, email, password);
  }
  

  assignSubject(): void {}
  assignTeacher(): void {}
}
