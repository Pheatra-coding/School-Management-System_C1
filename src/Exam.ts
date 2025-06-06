import { Classroom } from "./Classroom";
import { Grade } from "./Grade";
import { Subject } from "./Subject";
import { Student } from "./Student";

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

    getStudents(): Student[] {
        const students = this.subject.getStudents();
        if (Array.isArray(students)) {
            return students;
        } else if (students !== undefined && students !== null) {
            return [students];
        } else {
            return [];
        }
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
        const students = this.getStudents();
        for (let student of students) {
            if (student.getId() === studentId) {
                return [this];
            }
        }
        return [];
    }

}