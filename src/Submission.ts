import { Assignment } from "./Assignment";
import { Student } from "./Student";

export class Submission {
    constructor(
        private id:number, 
        private student: Student, 
        private assignment: Assignment, 
        private content: string, 
        private submitAt:Date, 
        private status: "draft" | "submitted" | "resubmitted"
    ){}

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getStudent(): Student {
        return this.student;
    }

    setStudent(student: Student): void {
        this.student = student;
    }

    getAssignment(): Assignment{
        return this.assignment;
    }

    setAssignment(assignment: Assignment): void {
        this.assignment = assignment;
    }



    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
    }

    getSubmitAt(): Date {
        return this.submitAt;
    }

    setSubmitAt(submitAt: Date): void {
        this.submitAt = submitAt;
    }

    getStatus(): "draft" | "submitted" | "resubmitted" {
        return this.status;
    }

    setStatus(status: "draft" | "submitted" | "resubmitted"): void {
        this.status = status;
    }

}