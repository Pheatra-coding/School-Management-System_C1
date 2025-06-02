import { Teacher } from './Teacher';
import { Student } from './Student';
import { Material } from './Material';
import { Assignment } from './Assignment';

export class GoogleClassroom {

    constructor(
        private id: number,
        private code: string,
        private name: string,
        private teacher: Teacher, 
        private students: Student[] = [],
        private lessons: Material[] = [],
        private assignments: Assignment[] = [],
    ) {
        this.code = this.classroomCode();
        console.log(`Classroom "${this.name}" created by ${teacher.getFullName()} with code: ${this.code}`);
    }

    private classroomCode(): string {
        return this.code;
    }

    getId(): number {
        return this.id;
    }

    getCode(): string {
        return this.code;
    }

    getName(): string {
        return this.name;
    }

    addLesson(lesson: Material): void {
        // logic to add lesson
    }

    addAssignment(assignment: Assignment): void {
        // logic to add assignment
    }

    addStudent(student: Student): void {
        if (!this.students.includes(student)) {
            this.students.push(student);
            console.log(`${student.getFullName()} joined classroom: ${this.name}`);
        } else {
            console.log(`${student.getFullName()} is already a member of classroom: ${this.name}`);
        }
    }


     joinByCode(code: string, student: Student): void {
        if (this.code === code) {
            this.addStudent(student);
        } else {
            console.log(`Wrong code. ${student.getFullName()} cannot join classroom.`);
        }
    }
}