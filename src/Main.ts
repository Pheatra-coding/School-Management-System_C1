import { Admin } from "./Admin";
import { Classroom } from "./Classroom";
import { Subject } from "./Subject";



// Create default Admin
const admin = new Admin(1, "Admin", "admin@gmail.com","admin123");

// Admin login
if (admin.login("admin@gmail.com", "admin123")){
    console.log("Admin logged in.");

    // Admin creates accout
    const student1 = admin.creareStudent(1, "Ah Noch PhengNeang", "nochGang@gmail.com","Noch123");
    const teacher1 = admin.createTeacher(1, "Pheak Tra", "pheakTra@gmail.com", "Tra123");

    // Student tries to login 
    student1.login("nochGang@gmail.com", "Noch123");

    // Teacher tries to login
    teacher1.login("pheakTra@gmail.com", "Tra123");

    // Admin creates a classroom and a subject
    const classroom1 = new Classroom("B13");
    const subject1 = new Subject(1, "OOP", classroom1, "OOP2025", teacher1, [student1], [], [], null, true);

     // Admin assign Subject to Teacher
    admin.assignSubjectToTeacher(subject1, teacher1);

    // Teacher uploads study material
    teacher1.uploadMaterial(subject1, "OOP_session5.pdf");

    // Teacher uploads an assignment
    teacher1.uploadAssignment(subject1, "OOP Final project", "Create a complete scholl management system by using OOP in TypeScript", new Date("2025-06-7"));


    // logout users
    student1.logout();
    teacher1.logout();  
    admin.logout();
}else {
    console.log("Admin login failed.");
}