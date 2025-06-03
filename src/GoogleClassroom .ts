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
        if (!this.lessons.includes(lesson)) {
            this.lessons.push(lesson);
            console.log(`Lesson "${lesson.getFileName()}" added to classroom: ${this.name}`);
        } else {
            console.log(`Lesson "${lesson.getFileName()}" already exists in classroom: ${this.name}`);
        }
    }

    addAssignment(assignment: Assignment): void {
        if (!this.assignments.includes(assignment)) {
            this.assignments.push(assignment);
            console.log(`Assignment "${assignment.getTitle()}" added to classroom: ${this.name}`);
        } else {
            console.log(`Assignment "${assignment.getTitle()}" already exists in classroom: ${this.name}`);
        }
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