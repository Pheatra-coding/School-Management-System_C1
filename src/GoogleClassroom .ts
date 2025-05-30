import { Teacher } from './Teacher';
import { Student } from './Student';
import { Material } from './Material';
import { Assignment } from './Assignment';

export class GoogleClassroom {

    constructor(
        private id: number,
        private code: string,
        private name: string,
        teacher: Teacher, 
        students: Student[],
        lessons: Material[],
        assignments: Assignment[]
    ) {}

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

    joinByCode(code: string): void {
        if (this.code === code) {
            console.log(`Joined classroom: ${this.name}`);
        } else {
            console.log(`Invalid code. Cannot join classroom.`);
        }
    }
}