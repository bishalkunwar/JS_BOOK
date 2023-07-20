// // The Grouping operator consists of a pair of parentheses around an expression or sub-expression to override the normal operator precedence so that expressions with lower precedence can be evaluated before an expression with higher priority. This operator can only contain expressions. The parameter list is passed to a function within this operator which will treat it as an expression.
// // Syntax: ()


// // Function as a statement and exception. In the below code, JavaScript considers a function as a statement if it is not preceded by any other statement. But applying a grouping operator that has the highest precedence over any other operator considers the function as an expression and hence it gets fully evaluated. 
// // function (x){ return x}; // SyntaxError: Function statements require a function name  

// // Function as expression.
// (function(x){ return x}); // compiler won't throw any error in this.


// example and comparison without grouping operator.
function grouping(){
    let value = 6*6+6;
    console.log("Without Grouping Operator: "+value);

    let value1 = 5*(5+6);
    console.log(`With Grouping Operator: ${value1}`);
}

grouping(); 

