import { Rating } from "./Rating";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export class Feedback{
    constructor(

        private id: number, 
        private student: Student, 
        private subject: Subject, 
        private teacher: Teacher, 
        private rating: Rating, 
        private comment: string,
    )
    {}

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

    getSubject(): Subject {
        return this.subject;
    }
    
    setSubject(subject: Subject): void {
        this.subject = subject;
    }

    getTeacher(): Teacher {
        return this.teacher;
    }

    setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
    }

    getRating(): Rating {
        return this.rating;
    }

    setRating(rating: Rating): void {
        this.rating = rating;
    }

    getComment(): string {
        return this.comment;
    }

    setComment(comment: string): void {
        this.comment = comment;
    }

     saveFeedback(): void {
        
        if (!this.student) {
            console.log("Student is required.");
            return;
        }
        if (!this.teacher) {
            console.log("Teacher is required.");
            return;
        }
        if (!this.subject) {
            console.log("Subject is required.");
            return;
        }
        if (!this.rating) {
            console.log("Rating is required.");
            return;
        }
        if (!this.comment || this.comment.trim() === "") {
            console.log("Comment cannot be empty.");
            return;
        }
       //test it
    //     console.log(`Feedback saved: ${this.comment} by ${this.student.getFullName()} for ${this.subject.getName()} taught by ${this.teacher.getFullName()} `)
    }
}