export class Classroom {
    constructor(
        private location: string
    
    ){}

    getRoomName(): string {
        return this.location;
    }


}