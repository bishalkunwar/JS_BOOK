// // Definition:- Ternary Operator: The “Question mark” or “conditional” operator in JavaScript is a ternary operator that has three operands. It is the simplified operator of if/else.

// let result = (10 > 0) ? true : false;
// console.log(result);
// // expected Output: true

// let message = (20 > 15) ? "Yes" : "No";
// console.log(message);
// // expected Output: Yes


// function checker(){
    
//     let PMark = 45;
//     let result = (PMark >= 44)? "Passed": "Failed";
//     console.log(result);
//     // return result
// };

// checker() 



// An example of multiple conditional operators. 

const prompt = require("prompt-sync")();

function valueChecker() {

    let marks = prompt("Ennter the Marks Obtained:- ");
    let result = (marks < 40)?"Unsatisfactory": (marks < 60)?"Average": (marks< 80)?"Good":"Excellent";
    console.log(result);
}

valueChecker();




// Characteristics of Ternary Operator:

// The expression consists of three operands: the condition, value if true, and value if false.
// The evaluation of the condition should result in either true/false or a boolean value.
// The true value lies between “?” & “:” and is executed if the condition returns true. Similarly, the false value lies after “:” and is executed if the condition returns false.