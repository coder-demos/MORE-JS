// const student = {
//     fullName: "Momina Khalid",
//     marks: 90.99,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     }
// }

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// }

// const saadKhalid = {
//     salary: 40000,
// };
// const saadKhalid1 = {
//     salary: 40000,
// };
// const saadKhalid2 = {
//     salary: 40000,
// };
// const saadKhalid3 = {
//     salary: 40000,
// };

// // Prototype

// saadKhalid.__proto__ = employee;
// saadKhalid1.__proto__ = employee;
// saadKhalid2.__proto__ = employee;
// saadKhalid3.__proto__ = employee;


// Classes

// class ToyotaCar {
//     constructor(brand) {
//         console.log("creating new object");
//         this.brand = brand;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brandName = brand;
//     }
// }

// let fortuner = new ToyotaCar("fortuner"); //constructor
// let lexus = new ToyotaCar(); //constructor

// Inheritance:

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();

// class Person {
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("solve problems, build things");
//     }
// }

// let MominaObj = new Engineer();

// Super Keyword

// class Animal{
//     constructor() {

//     }

// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//     }
// } 

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Rabbit("fish", 2, 12);
// const hawk = new Rabbit("hawk", 3, 50); 

// Lets Practice

// Q1: You are creating a website for your college. create a class "User" with 2 properties, name & email. It also has a method called viewData() that allows user to view website data

// let DATA = "secret information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email){

//     }
//     editData() {
//         DATA = "some new value";
//     }
// }

// let student1 = new User("Momina", "momina@email.com");
// let student2 = new User("Eisha", "eisha@email.com");

// let teacher1 = new User("Dean", "dean@email.com");

// let admin1 = new Admin("admin", "admin@college.com");