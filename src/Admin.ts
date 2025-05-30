import { AccType } from "./AccType";


export class Admin {
  constructor(
    public name: string,
    public acc: AccType
  ) {}

  assignSubject(): void {}
  createAcc(): void {}
  assignTeacher(): void {}
}
