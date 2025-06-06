import { Teacher } from "./Teacher";

export class Classroom {
    
    constructor(
        private location: string,
        private teacher: Teacher[] = [],
    
    ){}

    getRoomName(): string {
        return this.location;
    }

    getTeacher(): Teacher[] {
        return this.teacher;
    }

    setTeacher(teacher: Teacher []): void {
    this.teacher = teacher;
  }

    


    


    


}