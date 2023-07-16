// // JavaScript let is a keyword used to declare variables in JavaScript that are block scoped
// // Generally, it is suggested that we must use the let keyword while working with javascript.
// // Block Scope: The variables which are declared inside the { } block are known as block-scoped variables. variables declared by the var keyword cannot be block-scoped.

// // Example of let variableDeclaration in JS

// let myName = "Bishal";
// console.log(myName);

// function nameCaller () {
//     console.log(myName);
// };

// nameCaller();


// // let variable is always function scope:- A function scope variable is a variable declared inside a function and cannot be accessed outside the function.

// function fun(){
//     let num=10;
//     console.log(num);
// }
// fun(); //  calling the function
// console.log(num);

// // expected output:
// 10
// "ReferenceError: num is not defined


// let x=67;
// {
//     let x=8;
//     console.log(x);
// }
// console.log(x);
// let x = 78 // -- this is illigal and will throw Uncaught SyntaxError: Identifier 'x' has already been declared


// Let does not support hoisting.
// x=12;
//     console.log(x);
//     let x; 

//     // The expected output error will be: Uncaught ReferenceError: Cannot access 'x' before initialization 


// // const examples.

// // The difference in const variable declaration to others is that it cannot be re-assigned
// // Creates only read-only references to value

// const x;
// x = 12;

// Expected output:- Uncaught SyntaxError: Missing initializer in const declaration

// // Changing the content of array is
// // possible in cost array
// const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
// console.log(arr1.toString());
// arr1[2] = "Narayan"; // possible
// console.log(arr1.toString());


// The below example describes that the object properties can be modified only reference to the object cannot be changed. 

const student = {
    name: "Bishal", age: 23, about: "JS Student"
};
console.log(student);

// This is possible
student.name = "Shirjan";
student.age=28;
console.log(student);

// it is not possible
// const student={
// "name":"Aryan",
// "age":22,
// "about":"Commerce undergraduate"
// }



// // JavaScript var is a keyword used to declare variables in JavaScript that are function scoped. Before the introduction of ES6 all the keywords in JavaScript were declared with only “var” keyword. The var keyword is also used to declare global-scope variables.

// // Function Scope: The variables declared inside a function are function scoped and cannot be accessed outside the function. The variables declared with var can only be accessed inside that function and its enclosing function.
// // The variables declared using the var keyword are hoisted at the top and are initialized before the execution of code with a default value of undefined
// // The variables declared using the var keyword are hoisted at the top and are initialized before the execution of code with a default value of undefined.

// var test1 = 12,
//     test2= 14,
//     test3 = 16
// function foo(){
//     console.log(test1, test2, test3);
// }
// foo();

// console.log(test);
// var test = 12;

