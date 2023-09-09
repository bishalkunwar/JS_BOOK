// Classes are the core of Object Oriented Programming.
// ES6 introduced classes in JavaScript, classes in JS can be used to create new Objects with the help of a constructor, each classes can only have one constructor inside it.

// // Classes in ES6:=>
// class vehicle{
//     constructor(name, engine){
//         this.name = name;
//         this.engine = engine;
//     }
// }

// const bike1 = new vehicle("KTM RC 200", "200CC");
// const car1 = new vehicle("Maruti", "800CC");

// console.log(bike1.name);
// console.log(bike1.engine);
// console.log(car1.engine); 


// Rest Parameter and Spread Operator in JS:=>
// Rest Parameter:=> The Rest Parameter syntax allows us to represent an idenfinite number of arguments as an array.
// with the help of a rest parameter, a function can be called with any number of arguments , no matter how it was defined.

// // Simple Function:==>
// function tryNow(a,b){
//     return a+b;
// };

// console.log(tryNow(2,3));
// console.log(tryNow(1,2,3,4,5));
// // !!!Note:==> In the above code, no error will be thrown even when we are passing arguments more than the parameters, but only the first two arguments will be evaluated. It’s different in the case with the rest parameter.


// // ES6 REST PARAM:==>
// function tryNow1(...inputs){
//     let sum = 0;
//     for(let i of inputs){
//         sum +=i;
//     };

//     return sum;
// };

// console.log(tryNow1(23,4, 67));
// console.log(tryNow1(4,5,6,7,8,9,10,12,14,15));


// Spread Opeartor:==>
// The Spread Operator is another operator provided by ES6 that allows us the privilege to obtain a list of 

console.log(Math.min(1,2,3,4,-4));


// Without Spread:==>
let arr = [1,2,3,-4];
console.log(Math.min(arr));

// With Spreador:==>
let arr1 = [1, 2, 3, -4];
console.log(Math.min(...arr1));