//==================== IMPORT ALL NECESSARY CLASS MODULES ====================//
import { Admin } from "./Admin";
import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";
import { Exam } from "./Exam";
import { GoogleClassroom } from "./GoogleClassroom ";
import { Grade } from "./Grade";
import { Material } from "./Material";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Submission } from "./Submission";
import { Teacher } from "./Teacher";
import { Timetable } from "./Timetable";

//==================== ADMIN LOGIN AND ACCOUNT CREATION ====================//
const admin = new Admin(1, "Admin", "admin@gmail.com", "admin123");

if (admin.login("admin@gmail.com", "admin123")) {
    console.log("✅ Admin logged in.");

    //==================== STUDENT ACCOUNT CREATION ====================//
    const Ahnoch = admin.createStudent(1, "Ah Noch PhengNeang", "nochGang@gmail.com", "Noch123");
    const Kosal = admin.createStudent(2, "Kosal Poy", "KosalGang@gmail.com", "sally123");
    const pheaktra = new Student(3, "Pheaktra OEM", "pheaktra@gmail.com", "Pheak123");

    Ahnoch.login("nochGang@gmail.com", "Noch123");
    Kosal.login("KosalGang@gmail.com", "sally123");
    pheaktra.login("pheaktra@gmail.com", "Pheak123");

    //==================== TEACHER ACCOUNT CREATION ====================//
    const teacher1 = admin.createTeacher(1, "Pheak Tra", "pheakTra@gmail.com", "Tra123");
    const mengheang = new Teacher(2, "MengHeang PHO", "mengheang@gmail.com", "Meng123");
    const yon = new Teacher(4, "Yon YEN", "yon@gmail.com", "yon@1234");

    teacher1.login("pheakTra@gmail.com", "Tra123");
    mengheang.login("mengheang@gmail.com", "Meng123");
    yon.login("yon@gmail.com", "yon@1234");

    //==================== CLASSROOM AND SUBJECT SETUP ====================//
    const B13 = new Classroom("B13");
    const B14 = new Classroom("B14");
    const B12 = new Classroom("B12");

    const subjectOOP = new Subject(1, "OOP", B13, "OOP2025", teacher1, [Ahnoch], [], [], null, true);
    admin.assignSubjectToTeacher(subjectOOP, teacher1);

    const subjectAlgo = new Subject(2, "Algorithm", B14, "Algo2025", mengheang, [pheaktra], [], [], null, true);
    subjectAlgo.setTeacher(mengheang);

    const subjectVue = new Subject(3, "Vue.js", B12, "123", yon, [Ahnoch], [], [], null, true);
    subjectVue.setTeacher(yon);

    //==================== TIMETABLE ====================//
    const timetable1 = new Timetable(1, "Monday", "7:30am - 9:00am", B13);
    Ahnoch.getTimetable().push(timetable1);

    //==================== MATERIALS AND ASSIGNMENTS ====================//
    teacher1.uploadMaterial(subjectOOP, "OOP_session5.pdf");
    teacher1.uploadAssignment(
        subjectOOP,
        "OOP Final project",
        "Create a complete school management system by using OOP in TypeScript",
        new Date("2025-06-07")
    );

    const algoAss = new Assignment(
        2,
        subjectAlgo,
        "Algorithm Final Project",
        "Create a complete algorithm for sorting numbers in TypeScript",
        new Date("2025-06-10")
    );
    subjectAlgo.getAssignments().push(algoAss);
    pheaktra.assignments.push(algoAss);

    const vueExamMaterial = new Material(1, subjectVue, "Vue.js Final exam");
    subjectVue.getMaterials().push(vueExamMaterial);

    const vueExam = new Exam(1, subjectVue, new Date("2025-06-07"), B12, 0);
    subjectVue.setExam(vueExam);

    const lesson1 = new Material(2, subjectVue, "Vue.js Lesson 1");
    subjectVue.addMaterial(lesson1);

    const vueASS = new Assignment(3, subjectVue, "Vue.js Assignment 1", "Complete the Vue.js assignment", new Date("2025-06-15"));
    subjectVue.addAssignment(vueASS);

    //==================== ASSIGNMENT SUBMISSION ====================//
    const submission = pheaktra.startAssignmentSubmission(algoAss);
    pheaktra.finalizeSubmission(submission, "This is my final submission for the algorithm project.");

    console.log("✅ Submission status:", submission.getStatus());
    console.log("📌 Is late?", submission.isLate());

    //==================== GRADING ====================//
    const grade = new Grade(1, algoAss, Ahnoch, 99, "You are doing good, please keep going.");
    mengheang.gradeAssignment(algoAss, Ahnoch, grade);
    Ahnoch.viewGrades(grade);

    //==================== EXAM SCHEDULE ====================//
    Ahnoch.viewSchedule(vueExam);

    //==================== GOOGLE CLASSROOM ====================//
    const gClassroom = new GoogleClassroom(1, "OOP123", "OOP Class", teacher1);
    console.log(`📨 Teacher ${teacher1.getFullName()} sent code: ${gClassroom.getCode()} to students.`);

    gClassroom.joinByCode("OOP123", Ahnoch); 
    gClassroom.joinByCode("WRONGCODE", Kosal); 

    gClassroom.addLesson(lesson1);
    gClassroom.addAssignment(vueASS);

    console.log("🧾 Google Classroom Info:", gClassroom);

    //==================== STUDENT TIMETABLE DISPLAY ====================//
    console.log(`\n📅 ${Ahnoch.getFullName()}'s Timetable:`);
    Ahnoch.getTimetable().forEach((tt) => {
        console.log(`Subject: ${subjectOOP.getName()}, Day: ${tt.getDay()}, Time: ${tt.getTime()}, Room: ${subjectOOP.getClassroom().getRoomName()}`);
    });

    //==================== LOGOUT ====================//
    Ahnoch.logout();
    Kosal.logout();
    pheaktra.logout();
    teacher1.logout();
    mengheang.logout();
    yon.logout();
    admin.logout();
} else {
    console.log("❌ Admin login failed.");
}


