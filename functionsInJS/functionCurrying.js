// // Function Currying means converting one functin with multiple arguement into multiple functions with one arguements.
// // We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation

// // Why/How currying is useful in JavaScript:
// // It helps us to create a higher order function.
// // reduces chances of error in out function by dividing it into smaller functions that can handle one responsibility.
// // Very helpful to build modular and reusable code.
// // avoids to pass the same variable multiple times
// // makes the code more readable.


// // Here is the example of function currying.
// function calculateVolume(length){
//     return function(breadth){
//         return function(height){
//             return length*breadth*height;
//         }
//     }
// }

// console.log(calculateVolume(2)(3)(4));




// Function Currying in arrow functions:-
const addition = (x)=>(y)=>(z)=>x*y*z;

const tryNow = addition(6)(7)(8);
console.log(tryNow);