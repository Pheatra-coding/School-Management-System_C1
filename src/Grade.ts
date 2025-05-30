import { Assignment } from "./Assignment";
import { Exam } from "./Exam";
import { Student } from "./Student";

export class Grade{
   constructor(
        private id: number, 
        private assignment: Assignment, 
        private student: Student, 
        private score: number, 
        private feedback: string,
        private exam: Exam
   ) 
   {}

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getAssignment(): Assignment {
        return this.assignment;
    }

    setAssignment(assignment: Assignment): void {
        this.assignment = assignment;
    }

    getStudent(): Student {
        return this.student;
    }

    setStudent(student: Student): void {
        this.student = student;
    }

    getScore(): number {
        return this.score;
    }

    setScore(score: number): void {
        this.score = score;
    }

    getFeedback(): string {
        return this.feedback;
    }

    setFeedback(feedback: string): void {
        this.feedback = feedback;
    }

    getExam(): Exam {
        return this.exam;
    }

    setExam(exam: Exam): void {
        this.exam = exam;
    }

    isExamGrade(): boolean {
        return this.exam !== null;
    }
}