// // 16/02/2026:

//                                                 //OBJECTS-TASK NO:1

// let student = {
//     name: "Jeya",
//     age: 23,
//     city: "Chennai",
//     course: "Automation Testing",
//     batch: "Morning",
//     trainer: "Maha",
//     isPlaced: false,
//     skills: "JS, Playwright",
//     experience: "Fresher",
//     phone: "1234567890",
//     email: "jeya@gmail.com",
//     degree: "BSc CS",
//     college: "HICAS",
//     passoutYear: 2022,
//     percentage: 75
// };

// console.log(student);

// // access values
// console.log(student.name, student.age);
// console.log(student["city"]);

// // add new value
// student.salaryExpectation = "5 LPA";
// console.log(student);

// // delete value
// delete student.experience;
// console.log(student);

// // ----------------------------------
// // FUNCTION INSIDE OBJECT

// student.study = function () {
//     console.log("Studying JS daily at 12 PM");
// };

// student.study();

// // ----------------------------------
// // USING "this" KEYWORD

// student.intro = function () {
//     console.log("My name is " + this.name + " from " + this.city);
// };

// student.intro();

// // ----------------------------------
// // OBJECT WITH ARRAY

// let company = {
//     name: "TCS",
//     locations: ["Chennai", "Bangalore", "Hyderabad"]
// };

// console.log(company.locations[1]);
// console.log(company);

// // ----------------------------------
// // COMPLEX OBJECT

// let project = {
//     name: "Automation Project",
//     tools: "Playwright",
//     duration: "3 months",
//     details: {
//         language: "JavaScript",
//         framework: "Playwright",
//         testType: "E2E",
//         reports: true
//     }
// };

// console.log(project);
// console.log(project.details.language);

// // delete inside object
// delete project.details.reports;
// console.log(project);

// // ----------------------------------

// // CONSTRUCTOR FUNCTION -->:1

// function Bike(name, model) {
//     this.name = name;
//     this.model = model;
//     this.start = function () {
//         console.log("Bike started: " + this.name + " " + this.model);
//     };
// }

// let bike1 = new Bike("KTM", "RC390");
// bike1.start();

// let bike2 = new Bike("KTM", "DUKE200");
// bike2.start();

// // ----------------------------------

// console.log("------------------");



// // CONSTRUCTOR FUNCTION -->:2

// function User(username, password) {
//     this.username = username;
//     this.password = password;

//     // function inside constructor
//     this.login = function () {
//         console.log("User login: " + this.username);
//     };

//     this.showDetails = function () {
//         console.log("Username: " + this.username);
//         console.log("Password: " + this.password);
//     };
// }

// // create objects using new keyword

// let user1 = new User("admin", "1234");
// let user2 = new User("guest", "0000");

// // calling functions

// user1.login();
// user1.showDetails();

// console.log("------------------");

// user2.login();
// user2.showDetails();

