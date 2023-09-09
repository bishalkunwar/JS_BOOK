// For Simple understanding:- ES6 is completely different scripting language than the javascript.
// ES6 simply has added few features like arrow functions, let and const keyword for variable declaration, template literals, default parameters and some more.
// const keyword is immutable, let is mutable but block scopic, whereas var is global scope.


// // Const example:
// const fName = "Bishal";
// console.log(fName);

// // fName = "Shreejan"; // this will give the error: TypeError: Assignment to constant variable.


// // Object using const.
// const details = {
//     fName: "Bishal",
//     code: 234,
//     isInterned: false,
// };

// console.log(`${details.fName} has the code ${details.code} unfortunate that he is ${details.isInterned}`); 

// details.fName = "Gourav";
// console.log(details.fName); 
// // conclusion: const variable property inside the object are mutable.

// // objects are also mutable:
// let car = {
//     carName: "BMW 23",
//     carEngine: "3456",
//     carAbs: "dual channel",
// }

// console.log(car.carName);

// car.carName = "Chevro55";
// console.log(car.carName);


// Arrow Functions:
// Arrow functions are also called "fat arrow functions" are more concise syntax for writing function expressions. 
// The arrow function make expression more readable and more modern.

// // ES5
// function printData(name){
//     console.log(`Hello ${name}`);
// };

// printData("Bishal");


// // Whereas in ES6 the fat arrow function can represent the above code as like below:
// // ES6 
// const printData = (fName) => {
//     return `Hi ${fName}`;
// };

// console.log(printData("Bishal"));


// // ThiS ES6 METHOD can also be written as like this:
// const printData = name => ` hi ${name}`;  // this type will work only for single line statement.
// console.log(printData("Bishal")); 


// Template Literals:
// Template Literals are a feature of ES6 that allows us to work in a better way with Strings which helps us to work better and increase clealiness and readibility into the code and more readable.
// ES5
var fName = "Bishal Kunwar";
console.log("My name is " + fName);

// ES6:
const lName = "Bishal Kunwar";
console.log(`My Name is ${lName}`); 

