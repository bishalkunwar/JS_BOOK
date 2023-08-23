// Functions in JavaScript.

// A function is a set of statements that take inputs, do some specific computation and produces output..
// function signature example: const addNums = (x,y) => {return x+y}; 

// different types of functions in JS:
// Basic JS function:

function addNums(x,y){
    return x+y;
}

addNums(2,3);


// function expressions: this is also similar to function declaration without the function name. function expression can be stores in a variable assaignment:

let tryFunction = function(x,y){
    return x+y;
};

let output = tryFunction(4, 3);
console.log(output);



// arrow function:
// arrow function is the most used and efficient function in JS because of its easy implementation. means this is more easy and more compatible to use.

const addNums = (x,y)=>{
    return x+y;
};

const result = addNums(3, 4); 
console.log(result);



