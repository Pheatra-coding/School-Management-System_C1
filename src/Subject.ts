import { Classroom } from "./Classroom";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Assignment } from "./Assignment";
import { Material } from "./Material";
import { Exam } from "./Exam";
export class Subject {
    constructor(
        private id: number,
        private name: string,
        private classroom: Classroom,
        private code: string,
        private teacher: Teacher,
        students: Student[],
        private materials: Material[]=[],
        private assignments: Assignment[] = [],
        private exams: Exam | null,
        private isCompulsory: boolean
    ){
        this.classroom = classroom;
    }


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
    setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
    }

    // Teacher add the Material 
    addMaterial(material: Material): void {
        this.materials.push(material);
    }

    // Teacher add the Material
    getMaterials(): Material[] {
        return this.materials;
    }

    // get classroom
    getClassroom(): Classroom {
        return this.classroom;
    }

    // Add assignment to the subject
    addAssignment(assignment: Assignment): void {
        this.assignments.push(assignment);
    }

    // Get assignments for the subject
    getAssignments(): Assignment[] {
        return this.assignments;
    }

    setExam(exam: Exam): void {
        this.exams = exam;
    }

}