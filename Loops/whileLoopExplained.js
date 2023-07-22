// while loop in JS is a control flow statement that allows the code to be executed repeatedly based on the given boolean condition.
// The while loop can be thought of as a repeating if statement.
// The loop can be used to execute the specific block of code multiple times until it failed to match the condition.


// While loop example:
let value = 1;
while(value <= 4){
    console.log(value);
    value += 1;
};

// Do-While Loop: First statement is always true, then the loop exceeds only upto the condition meets true.
// do {
//     // Statements
// }
// while (condition);

let init = 4; // Initilizer
do{
    console.log("Who like to read code? Great!!");
    init += 1; // incrementer/tester
}while(init <= 10); // conditioner
