// // In computer programming, a loop is a sequence of instructions that is repeated until a certain condition is reached.

// // An operation is done, such as getting an item of data and changing it, and then some condition is checked such as whether a counter has reached a prescribed number.
// // Counter not Reached: If the counter has not reached the desired number, the next instruction in the sequence returns to the first instruction in the sequence and repeats it.
// // Counter reached: If the condition has been reached, the next instruction “falls through” to the next sequential instruction or branches outside the loop. 

// // There are mainly two types of loops:
// // Entry Controlled Loop: In these types of loops, the test condition is tested before entering the loop body. The for Loop and while Loop are entry-controlled loops.
// // Exit Controlled Loop: In these types of loops the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. The do-while loop is exit controlled loop.

// // a for statement consumes the initialization, condition, and increment/decrement in one line

// // Infinite loop: One of the most common mistakes while implementing any sort of looping is that it may not ever exit, i.e. the loop runs for infinite times. This happens when the condition fails for some reason. 

// // examples:
// // infinite loop:
// // Infinite loop because condition is not false
// // condition should have been i>0.
// for (let i = 5; i != 0; i -= 2) {
//     console.log(i);
// }
 
// let x = 5;
 
// // Infinite loop because update statement
// // is not provided
// while (x == 5) {
//     console.log("In the loop");
// }

// For Example:
for (let i = 0; i < 10; i++) {
    console.log("Hello World!");
} 


// while (boolean condition) {
//     loop statements...
// } 

// do {
//     Statements..
// }
// while (condition);
