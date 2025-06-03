import { Admin } from "./Admin";
import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";
import { GoogleClassroom } from "./GoogleClassroom ";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Submission } from "./Submission";
import { Teacher } from "./Teacher";
import { Timetable } from "./Timetable";



// Create default Admin
const admin = new Admin(1, "Admin", "admin@gmail.com","admin123");

// Admin login
if (admin.login("admin@gmail.com", "admin123")){
    console.log("Admin logged in.");

    // Admin creates accout
    const student1 = admin.creareStudent(1, "Ah Noch PhengNeang", "nochGang@gmail.com","Noch123");
    const student2 = admin.creareStudent(2, "Kosal Poy", "KosalGang@gmail.com","sally123");

    const teacher1 = admin.createTeacher(1, "Pheak Tra", "pheakTra@gmail.com", "Tra123");
    

    // Student tries to login 
    student1.login("nochGang@gmail.com", "Noch123");
    student2.login("KosalGang@gmail.com", "sally123");

    // Teacher tries to login
    teacher1.login("pheakTra@gmail.com", "Tra123");

    // Admin creates a classroom and a subject
    const classroom1 = new Classroom("B13");
    const subject1 = new Subject(1, "OOP", classroom1, "OOP2025", teacher1, [student1], [], [], null, true);

     // Admin assign Subject to Teacher
    admin.assignSubjectToTeacher(subject1, teacher1);

    // Create and assign a timetable to the student
    const timetable1 = new Timetable(1, "Monday","7:30am - 9:00am", classroom1);
    student1.getTimetable().push(timetable1);


    // Teacher uploads study material
    teacher1.uploadMaterial(subject1, "OOP_session5.pdf");


    // Teacher uploads an assignment
    teacher1.uploadAssignment(subject1, "OOP Final project", "Create a complete scholl management system by using OOP in TypeScript", new Date("2025-06-7"));

    // Teacher and student created somewhere earlier
    const classroom = new GoogleClassroom(1, "OOP123", "OOP Class", teacher1);

     // Teacher sends code (printed)
    const code = classroom.getCode();
    console.log(`Teacher ${teacher1.getFullName()}  sent code: ${code} to students.`);
    classroom.joinByCode("OOP123", student1); // Success
    classroom.joinByCode("WRONGCODE", student2); // Fails

     // Display student's timetable
    console.log(`\n${student1.getFullName()}'s Timetable:`);
        student1.getTimetable().forEach((tt) => {
        console.log(`Subject: ${subject1.getName()}, Day: ${tt.getDay()}, Time: ${tt.getTime()}, Room: ${subject1.getClassroom().getRoomName()}`);
    });


    // Teacher grades the assignment
    teacher1.gradeAssignment(subject1.getAssignments()[0], student1, 99, "Great work! Clear explanation of concepts.");



    // logout users
    student1.logout();
    teacher1.logout();  
    admin.logout();


    // Create Classroom and Participants
    let B14 = new Classroom("B14");
    let mengheang = new Teacher(2, "MengHeang PHO", "mengheang@gmail.com", "Meng123");
    let pheaktra = new Student(3, "Pheaktra OEM", "pheaktra@gmail.com", "Pheak123");

    // Log in users
    pheaktra.login("pheaktra@gmail.com", "Pheak123");
    mengheang.login("mengheang@gmail.com", "Meng123");

    // Create Subject and Assignment
    let subjectAlgo = new Subject(2, "Algorithm", B14, "Algo2025", mengheang, [], [], [], null, true);
    subjectAlgo.setTeacher(mengheang);

    let algoAss = new Assignment(2, subjectAlgo, "Algorithm Final Project", "Create a complete algorithm for sorting numbers in TypeScript", new Date("2025-06-10"));

    // Assign the assignment to the subject
    subjectAlgo.getAssignments().push(algoAss);
    subjectAlgo.addAssignment(algoAss); // optional if `addAssignment()` is your preferred way

    // Assign the assignment to student
    pheaktra.assignments.push(algoAss);

    // Student starts and submits the assignment
    let submission = pheaktra.startAssignmentSubmission(algoAss);
    pheaktra.finalizeSubmission(submission, "This is my final submission for the algorithm project.");

    // Log submission result
    console.log("Submission status:", submission.getStatus());
    console.log("Is late?", submission.isLate());

    // add subject for pheaktra
    pheaktra.subjects.push(subjectAlgo);

    // add subject for assignment
    pheaktra.assignments.push(algoAss);
    
}else {
    console.log("Admin login failed.");
}