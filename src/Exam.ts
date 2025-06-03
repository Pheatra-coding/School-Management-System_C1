import { Classroom } from "./Classroom";
import { Grade } from "./Grade";
import { Subject } from "./Subject";

export class Exam{
    constructor(
        private id: number,
        private subject: Subject,
        private date: Date,
        private room: Classroom,
        private result:number
    )
    {}

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getSubject(): Subject {
        return this.subject;
    }

    setSubject(subject: Subject): void {
        this.subject = subject;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(date: Date): void {
        this.date = date;
    }

    getRoom(): Classroom {
        return this.room;
    }

    setRoom(room: Classroom): void {
        this.room = room;
    }
    
    getResult(): number {
        return this.result;
    }
    setResult(grade: Grade): void {
    const score = grade.getScore();
    if (score < 0 || score > 100) {
      throw new Error('Invalid grade score');
    }
    this.result = score;
  }

  getExamByStudentId(studentId: number): Exam[] {
    return [this];
  }


}