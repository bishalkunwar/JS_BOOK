// // // A JavaScript function is a collection of reusable code that may be invoked from anywhere in our application.
// // // function enables the complex program to be into simpler forms.

// // // function definition: function definition has:- function name, function arguements, enclosed into curly braces.
// // // exampple:
// // function example(arguements, arguements){
// //     function statements
// // }; 


// //Function Calling: To call a function at a later point in the script, simply type the function’s name. By default, all JavaScript functions can utilize argument objects. Each parameter’s value is stored in an arguments object. The argument object is similar to an array. Its values may be accessed using an index, much like an array. It does not, however, provide array methods.  
// // example:
// function printer(){
//     console.log("Hey, this is the printer.");
// };

// printer();


// // Function Arguements: JavaScript functions can have any data types as arguements.
// // Function Arguments: A function can contain one or more arguments that are sent by the calling code and can be utilized within the function. Because JavaScript is a dynamically typed programming language, a function argument can have any data type as a value.

// function printer(namee){
//     console.log(`Hey ${namee}! wah wah`);
// };

// printer("Bishal");



// // Return value:
// // A return statement is an optional part of a javascript function.
// function welcome(){
//     return "welcome to my learning";
// };

// console.log(welcome());




// Types of functions in JS:

// 1. Named Functions:
// Named Functions, we write in the code and use it whenever we need it by refererring its name and providing with some arguements.
const addition = (a, b) => {
    return a+b;
};

console.log(addition(5, 8));


// 2. Anonymous Functions:
// Function without the name is actually the anonymous function, however it will need the reference variable.
let add = function(x,y){
    return x+y;
};
console.log(add(4,6));


// 3. Nested Functions:
// when one or many sub functions are inside the major function, then it is nested functions.
// the inner function has access to the variables and arguements of the outer function.
// the outer function cannot access the variables and arguements of inner functions, 

const tryNested = (fName) => {
    const nestedFunc = () => {
        console.log(fName);
    };

    return nestedFunc();
};

tryNested("Fuck You Bitch");


// Immediately Invoked Function Expressions:
// The browser executes the invoked functions expression as soon as it detects it, means the called function runs instantly, and produces the direct output.
// That is, it is unaffected by code that occurs later in the script and can be beneficial.

let sendSMS = (function(){
    return "hello motherfuckers";
})();

console.log(sendSMS);