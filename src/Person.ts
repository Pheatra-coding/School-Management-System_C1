abstract class Person {

    constructor(
        private id: number,
        private fullName: string,
        private email: string,
        private password: string,
    ) {}

    abstract login(): void;
    abstract logout(): void;

    getId(): number {
        return this.id;
    }

    getFullName(): string {
        return this.fullName;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    setFullName(fullName: string): void {
        this.fullName = fullName;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setPassword(password: string): void {
        this.password = password;
    }
}