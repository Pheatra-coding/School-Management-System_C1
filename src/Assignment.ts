import { Subject } from "./Subject";
import { Submission } from "./Submission";

export class Assignment{
    private submissions: Submission[];
    assignments: Assignment[];

    constructor(
        private id:number, 
        private subject:Subject, 
        private title:string, 
        private description:string, 
        private dueDate:Date, 
        submissions: Submission[] = [],
        assignments: Assignment[] = []
    ) {
        this.submissions = submissions;
        this.assignments = assignments;
    }


    getId(): number {
        return this.id;
    }

    serId():void{}

    getSubject(): Subject {
        return this.subject;
    }

    setSubject(subject: Subject): void {
        this.subject = subject;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getDueDate(): Date {
        return this.dueDate;
    }

    setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }
    addSubmission(submission: Submission): void {
        this.submissions.push(submission);
    }
    getSubmissions(): Submission[] {
        return this.submissions;
    }
    
}