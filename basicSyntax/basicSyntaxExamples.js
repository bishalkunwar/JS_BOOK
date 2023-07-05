// Introduction part.

// document.write("Basic Print method in javascript");


// JavaScript Syntax refers to the set of rules that determines how JS programs are conducted.

// Variable Declaration
// var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted. 
// Prefer const Over let Or var
// You should prefer const when declaring variables in JavaScript (ES6+). If you are assigning a value to a variable, and you're not going to be reassigning that value, const is the safest choice and communicates this intent. You should avoid reusing variables for different purposes;

// Variable Declaration
// JavaScript Variables: A JavaScript variable is the simple name of the storage location where data is stored. There are two types of variables in JavaScript which are listed below: 

// Local variables: Declare a variable inside of a block or function.
// Global variables: Declare a variable outside function or with a window object.

// Declare a variable and initialize it.

let fruitName = "Banana";

// Function definition.
function fruitCalling(){
    
    // local variable declare. 
    let favNumber = 10;

    // Display the value
    console.log(`Global Value: ${fruitName}.\t local value: ${favNumber}`)

}

// this will throw error. --> ReferenceError: favNumber is not defined
// console.log(`local variable that was declared inside the function cannot be used inside. ${favNumber}`)


// Function call
fruitCalling();



