// // In JavaScript, the typeof operator returns the data type of its operand in the form of a string. The operand can be any object, function, or variable. 
// // Syntax: typeof operand OR typeof(operand)

// // Operand is an expression representing the object or primitive whose type is to be returned. The possible types that exist in javascript are: undefined or object or boolean or number or String or symbol or function

// // Examples:
// console.log(typeof "Bishal");
// console.log(typeof 68);
// console.log(typeof variable);

// // const prompt = require("prompt-sync")();
// // const check = prompt(`Enter anything: `);
// // console.log(typeof check);  // --this is giving string eventhough we give number input. need to know more about this.


// // Number typeof check:- 

// console.log(typeof 24 === "number");
// console.log(typeof 24.24 === "number");

// // log base 10
// console.log(typeof Math.LN10 === "number");
// console.log(typeof Infinity === "number");
// console.log(typeof NaN === "number");
// console.log(typeof Number(73) === "number");


// // String Checking.
// console.log(typeof '' === "string");
// console.log(typeof 'myFriend' === "string");
// console.log(typeof `` === "string");
// console.log(typeof `1` === "string");
// console.log(typeof typeof(1) === "string");
// console.log(typeof String(1) === "string");


// // Boolean
// console.log(typeof true === 'boolean');
// console.log(typeof false === 'boolean');
 
// // Two calls of the ! (logical NOT) operator
// // are equivalent to Boolean()
// console.log(typeof !!(1) === 'boolean');

// // Types of undefined
// // Undefined
// console.log(typeof undefined === 'undefined');
 
// // Declared but undefined variable
// console.log(typeof variable === 'undefined');


// // Object Type:
// console.log(typeof { b: 1 } === 'object');
// console.log(typeof [1, 2, 9] === 'object');
// console.log(typeof new Date() === 'object');


// Type of function
console.log(typeof function () { } === 'function');
 
//classes too are objects
console.log(typeof class C { } === 'function');
console.log(typeof Math.sin === 'function');