import { Teacher } from "./Teacher";

export class Classroom {
    setTeacher(teacher: Teacher) {
      throw new Error("Method not implemented.");
    }
    constructor(
        private location: string
    
    ){}

    getRoomName(): string {
        return this.location;
    }


}