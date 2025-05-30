import { Classroom } from "./Classroom";

export class Timetable {
    constructor(
        private id: number,
        private day: string,
        private time: string,
        classroom: Classroom
    ){}

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getDay(): string {
        return this.day;
    }

    setDay(day: string): void {
        this.day = day;
    }

    getTime(): string {
        return this.time;
    }

    setTime(time: string): void {
        this.time = time;
    }
}