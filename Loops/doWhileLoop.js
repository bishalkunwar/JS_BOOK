// A do… while loop in JavaScript is a control statement in which the code is allowed to execute continuously based on a given boolean condition. It is like a repeating if statement.
// The do…while loop can be used to execute a specific block of code at least once

// Syntax:
// do {
//     // Statements
// }
// while(conditions)


// Do while example with comparison with while.
let test = 1;
do{
    console.log(test);
}while(test<1); // this will execute once despite the test condition, then if true then code executes.

while(test<1){
    console.log(test);
    test +=1;
};  // this while will never execute