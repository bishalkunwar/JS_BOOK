// // for of loop is used to access the values of an object in JS., for of loop was first introduced in ES6 version of JS
// // The for…of loop iterates over the iterable objects (like Array, Map, Set, arguments object, …,etc), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

// // syntax: for ( variable of iterableObjectName) {
// //     ...
// //  } 


// // Array of numbers:- 
// let numbers = [1,2,3,4,5,6];
// console.log("Array values are:- ");
// for(let value of numbers){
//     console.log(value);
// }; 




// // The following code demonstrates the for..of loop over an argument object.
// // JavaScript arguments is an object which is local to a function.  
// // It acts as a local variable that is available with all functions by default except arrow functions in JavaScript.


// function goals(){
//     for(let values of arguments){
//         console.log(values);
//     }
// }

// // Iterating over all arguments passed through the function.
// goals("Node", "Express", "React");


// Example of Key-Value Pair using mapObject in JS with the for of loop over the array 
let originalMap = new Map([
    ["Hello", 1], ["Hello1", 2], ["Hello3", 3],
]);

console.log("Display key and Value all");
for (let a of originalMap){
    console.log(a);
}

// display value only
console.log("Value only:");
for(let [key, value] of originalMap){
    console.log(value);
}