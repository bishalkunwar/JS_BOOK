// The JavaScript Pipeline Operator ( |> ) is used to pipe the value of an expression into a function. This operator makes chained functions more readable. This function is called ( |> ) operator and whatever value is used on the pipeline operator is passed as an argument to the function. The functions are placed in the order in which they operate on the argument.
// Using the Pipeline Operator: As the Pipeline Operator is an experimental feature and currently in stage 1 proposal, there is no support for currently available browsers and therefore is also not included in Node. However, one can use Babel (JavaScript Compiler) to use it.

function addition(x){
    return x+8;
}

function subtract(x){
    return x-3;
}

// // without pipeline operator:- 
// let num1 = addition(subtract(addition(subtract(8))));
// console.log(num1);

let num1 = 8 |> subtract |> addition |> subtract |> addition;
console.log(num1);