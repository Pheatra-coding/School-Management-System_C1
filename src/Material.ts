import { Subject } from "./Subject";
export class Material  {
    constructor(
        private id: number,
        subject: Subject,
        private fileName: string
    ){}

    getId(): number {
        return this.id;
    }

    setID(id: number): void {
        this.id = id;
    }

    getFileName(): string {
        return this.fileName;
    }

    setFileName(fileName: string): void {
        this.fileName = fileName;
    }

    
}