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

    /**
     * Submit the assignment if it's currently in "draft" status.
     * Changes status to "submitted" and sets the submission date.
    */
    public  submit(): void {
        if (this.status === "draft") {
            this.status = "submitted";
            this.submitAt = new Date();
            console.log(`Submission by ${this.student.getFullName()} for assignment "${this.assignment.getTitle()}" has been submitted.`);
        } else {
            console.log(`Submission by ${this.student.getFullName()} for assignment "${this.assignment.getTitle()}" cannot be submitted in its current status: ${this.status}.`);
        }
    }

    /**
     * Check if the submission was submitted after the assignment's due date.
     * Returns true if it is late and status is "submitted".
    */
    public isLate(): boolean {
        const now = new Date();
        return this.status === "submitted" && this.submitAt > this.assignment.getDueDate();
    }


    /**
     * Update the content of the submission.
     * Only allowed if the status is "draft" or "resubmitted".
    */
    public updateContent(newContent: string): void {
        if (this.status === "draft" || this.status === "resubmitted") {
            this.content = newContent;
            console.log(`Content updated for submission by ${this.student.getFullName()} for assignment "${this.assignment.getTitle()}".`);
        } else {
            console.log(`Cannot update content for submission by ${this.student.getFullName()} for assignment "${this.assignment.getTitle()}" in its current status: ${this.status}.`);
        }
    }

}