import { Classroom } from "./Classroom";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
export class Subject {
    constructor(
        private id: number,
        private name: string,
        classroom: Classroom,
        private code: string,
        teacher: Teacher,
        students: Student[],
        materials: Material[],
        assignments: Assignment[],
        exams: Exam,
        private isCompulsory: boolean
    ){}


    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCode(): string {
        return this.code;
    }

    setCode(code: string): void {
        this.code = code;
    }
    
}