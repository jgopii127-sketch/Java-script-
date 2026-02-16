//03/02/2026:-----------Practice Section------------//

// console.log("Hello Machan 😎 JavaScript works!");
// console.log("Hey buddy 😎 JavaScript works!");

// let a = 10;
// let b = 20;

// let sum = a + b;

// console.log("Sum is:", sum);

// var city = "Chennai";
// city = "Madurai";
// console.log(city);

// var isOnline = true;
// console.log(isOnline);

// var x;
// console.log(x); // undefined

// var a = 5;
// var a = 10;
// console.log(a);

// var first = "Hello";
// var second = " World";
// console.log(first + second);

// var a = 10;
// var b = 20;
// var c = 30;
// console.log((a + b + c) / 3);

// let a = 5;
// console.log(a);

// let score = 50;
// score = 80;
// console.log(score);

// let name = "Gopi";
// let age = 25;
// console.log(`My name is ${name} and age is ${age}`);

// let a = 5;
// a++;
// console.log(a);

// Swaping values 

// let a = 5;
// let b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// Const  
// const country = "India";
// console.log(country);

// const arr = [1, 2, 3];
// console.log(arr);

// const arr = [1, 2];
// arr.push(3);
// console.log(arr);

// const user = { name: "Ram", age: 25 };
// console.log(user);

// Odd/Even 

// let number = 10; 

// if (number % 2 === 0) {
//     console.log(number + " is Even");
// } else {
//     console.log(number + " is Odd");
// }

// let str3 = `He's an intelligent boy and "clever"`;
// console.log(str3);


//06/02/2026:

// Fucntions

// function sayHello() {
//     console.log("welcome to JS 👋");
// }

// sayHello();

// Functions with parameters

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Jeya");
// greet("Micca");

// Functions with returns

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);

// ----------------------------------------------------------------------------------------------------

//07/02/2026:

// function clickButton (a,b){
//     let x=25;
//     let y=25;
//     // console.log(x+y);
//     if ((x===10) || (y==26)){
//         console.log('inside if');
//     }
//     else{
//         console.log('inside else');
//     }
// }

// clickButton();/

//Nested if:

// function clickButton (a,b){
//     let x=25;
//     let y=25;
//     // console.log(x+y);
//     if ((x===10) || (y==26)){
//         console.log('inside if');
//     }
//     else{
        // console.log('inside else');
//     }
// }

// clickButton();

// Multiple nested if :

// function clickButton(){
//     let x=25;
//     let y=25;

//     if (x==25){
//         console.log('insdide if');
//         if((x+y)>=50){
//             console.log('inside nested if');
//             if((y+x)==50){
//                 console.log('inside nested if 2');
//             }else{
//                 console.log('inside nested else 2');
//             }

//         }else{
//             console.log('insdie nested else');
//         }
//     }else{
//         console,log('inside else');
//     }

// }

// clickButton();


// Nested if with Nested else if:

// function clickButton(){
//     let x=20;
//     let y =30;

//     if (y<x){
//         console.log('inside if');
//         if(x===y){
//             console.log('insdie nested if');

//             if((x+y)===60){
//                 console.log('inside nested if 2');

//             }
//             else{
//                 console.log('inside nested else 2');

//             }

//         }else{
//             console.log('inside nested else');

//         }
//     }else if (y>40){
//         console.log('inside else');

//     }else if (x>19){
//         console.log('inside else if ');
//     }else {
//         console.log('inside else');
//     }
    
// }

// clickButton();

// -------------------------------------------------------------------------------------------------

// let person = {
//   name: "Gopi",
//   age: 23,
//   city: "Chennai"
// };

// console.log(person.name);
// console.log(person.age);

// Array with marks validation:

// let marks=[35,78,90,32,22,25,76,98,45];

// for(let i =0; i < marks.length; i++){
//         if (marks[i]>=50)
//                 console.log(marks[i]+'Pass');
//                 if(marks[i]>=70){
//                         console.log('Good');
//                         if(marks[i]>=90){
//                                 console.log('Very good');
//                                 if(marks[i]==100){
//                                 console.log('Centum');
//                         }
//                 }
//         }
// }else{
//         console.log(marks[i]+'Fail');
//     }

// }

// Simple validation using While loop and IF else if conditions:

// let marks = [35,78,90,32,22,25,76,98,45,100];

// let i = 0;   // 1️⃣ starting position

// while (i < marks.length) {   // 2️⃣ condition

//     let mark = marks[i];

//     if (mark < 50) {
//         console.log(mark + " Fail");
//     } else {
//         console.log(mark + " Pass");

//         if (mark == 100) console.log("Centum");
//         else if (mark >= 90) console.log("Very good");
//         else if (mark >= 70) console.log("Good");
//     }

//     i++;   // 3️⃣ move to next index (IMPORTANT)
// }

//-----------------------------------------------------------------------------------------------

// marks=[23,77,54,89,65,55,100,91];

// let i=0;

// while(i<marks.length){
//         let mark=marks[i];

//         if (mark < 50){
//                 console.log(mark + 'fail');
//         }
//         else{
//                 console.log(mark + 'pass');

//                 if(mark >=100) console.log('Centum');
//                 else if(mark >=90) console.log('very good');
//                 else if(mark >=70) console.log('good');
//         }
//         i++;
// }

// -------------------------------------------------------------------

// For each loop:

// marks=[23,77,54,89,65,55,100,91];

// marks.forEach((mark) => {
//         if(mark >=50){
//                 console.log(mark+'pass');
//         }
//         else{
//                 console.log(mark+'fail');
//         if (mark >=70)
//                 console.log(mark+'good');
//         else if(mark >=90)
//                 console.log(mark+'very good');
//         else if (mark==100)
//                 console.log(mark+'centum');


//         }
//  });
// _________________>Wrong way to validate 

// let marks = [35,78,90,32,22,25,76,98,45,100];

// marks.forEach((mark) => {

//   if (mark < 50) {
//     console.log(mark + " Fail");
//   } else {
//     console.log(mark + " Pass");

//     if (mark == 100) console.log("Centum");
//     else if (mark >= 90) console.log("Very good");
//     else if (mark >= 70) console.log("Good");
//   }

// });

//----------------> Correct way ti validate
// -----------------------------------------------------------------------















