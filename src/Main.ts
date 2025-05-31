import { Admin } from "./Admin";



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

    // logout users
    student1.logout();
    teacher1.logout();  
    admin.logout();
}else {
    console.log("Admin login failed.");
}