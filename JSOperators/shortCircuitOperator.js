// In JavaScript short-circuiting, an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result. If the result is clear even before the complete evaluation of the expression, it short circuits and the result will be returned.
// Short circuit evaluation avoids unnecessary work and leads to efficient processing. 

// AND(&&) short circuit: In the case of AND, the expression is evaluated until we get one false result because the result will always be false, independent of the further conditions. If there is an expression with &&(logical AND), and the first operand itself is false, then a short circuit occurs, the further expression is not evaluated and false is returned. JavaScript short-circuiting is also very useful because it may be used to replace if else statements. 
// In JavaScript true && expression always evaluates to expression and false && expression always evaluates to false, no matter whether the expression returns a true/false value or not.

// Example:- 

function gfg() {
    // AND short circuit
    console.log(false && true);
    console.log(true && true);
    
    // OR short circuit
    console.log(true || false);
    console.log(false || true);

    // AND and OR Circuit
    console.log(((false || false )&& true) && true); // this won't proceed the last box group execution.
}
gfg();


// OR(||) short circuit: In the case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions. If there is an expression with ||(logical OR), and the first operand itself is true, then a short circuit occurs, evaluation stops, and true is returned.  OR short-circuiting can also be used to replace if else statements just like AND short-circuiting in JavaScript. In JavaScript true||expression always returns true and the false || expression always returns the expression.