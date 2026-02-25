//oops - object oriented programming sysytem.

//class - like a blue print of a object

// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHello(){
//         console.log("hi, i am "+this.name);
//     }
// }
// let Student1 = new Student("ravi",12);
// Student1.sayHello();

// class Car{
//     constructor(brand,color){
//         this.brand =brand;
//         this.color = color;
//     }
//     start(){
//         console.log(this.brand + " car is strating")
//     }
// }

// let car1 = new Car("tata","red");
// car1.start();

//Encapsulation - hiding data and following access only thriugh methods

// class BankAccount {
//     #balance =0; 

//     deposit(amount){
//         this.#balance +=amount;
//         console.log("amount deposited")
//     }
//     checkBalance(){
//         console.log("balance is "+ this.#balance);
//     }
// }
// let acc1 = new BankAccount();
// acc1.deposit(10000);
// acc1.checkBalance();

// class mobile{
//     #battery = 100

//     usePhone(){
//         this.#battery -=10;
//         console.log("battery left: "+this.#battery);
//     }
// }
// let phone = new mobile();
// phone.usePhone();

// inheritance - one class takes property from another class -- extends keyword
//  class animal {
//     eat(){
//         console.log("animal is eating")
//     }
//  }
// class dog extends animal{
//     bark(){
//         console.log("dog is barking");
//     }
// }
//  let d1 = new dog();
//  d1.eat();
//  d1.bark();

//ploymorphism  - same method name, different behavior -- extends - overload

// class Animal{
//     sound(){
//         console.log("animal makes sound");
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("cat says meow");
//     }
// }

// let a1 = new Cat();
// a1.sound();

// --------------------------------------------------------------------------------


// Task in Oops using class,encapsulation,inheritance and polymorphism:

// 1. Class & Object (New Example – Employee)

// class Employee {
//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }

//     work() {
//         console.log(this.name + " is working as " + this.role);
//     }
// }

// let emp1 = new Employee("Gopi", "QA Automation Engineer");
// emp1.work();

// 2. Encapsulation (New Example – ATM Machine)

// class ATM {
//     #balance = 5000;

//     withdraw(amount) {
//         this.#balance -= amount;
//         console.log("Withdrawn: " + amount);
//     }

//     checkBalance() {
//         console.log("Balance: " + this.#balance);
//     }
// }

// let user = new ATM();
// user.withdraw(1000);
// user.checkBalance();

// 3. Inheritance (New Example – Person → Teacher)

// class Person {
//     speak() {
//         console.log("Person is speaking");
//     }
// }

// class Teacher extends Person {
//     teach() {
//         console.log("Teacher is teaching");
//     }
// }

// let t1 = new Teacher();
// t1.speak();
// t1.teach();

// 4. Polymorphism (New Example – Payment)

// class Payment {
//     pay() {
//         console.log("Payment method");
//     }
// }

// class UPI extends Payment {
//     pay() {
//         console.log("Paid using UPI");
//     }
// }

// let p1 = new UPI();
// p1.pay();


