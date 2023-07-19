// // Comma Operator.
// // Comma Operator "," mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. 
// // A comma operator is used as a single expression. when a comma operator is placed in an expression then it will executes each expression and returns the rightmost expression.

// // Example:

// function func1() {
//     console.log("One");
//     return "One";
// }

// function func2() {
//     console.log("Two");
//     return "Two";
// }

// function func3() {
//     console.log("Three");
//     return "Three";
// }

// let collector = (func1(), func2(), func3(), func1() );

// console.log(collector);





for(let a=0, b=5; a<=10; a++, b--){
    console.log(a,b);
}