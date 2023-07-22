// // for (statement 1 ; statement 2 ; statement 3){
// //     code here...
// // }
// // Statement 1: It is the initialization of the counter. It is executed once before the execution of the code block.
// // Statement 2: It is the testing statement that defines the condition for executing the code block It must return a boolean value. It is also an entry-controlled loop as the condition is checked before the execution of the loop statements.
// // Statement 3: It is the increment or decrement of the counter & executed (every time) after the code block has been executed.

// // Simple ForLoop Example:
// let x;
// for(x=4;x<=6;x++){
//     console.log(x);
// }


// It is a controlled statement that controls the increment/decrement of the counter variable. It is also optional by nature and can be done inside the loop body.
let students = ["Bishal", "Shreejan", "Nishant", "Alishan"];
let i = 0;
let studentsIntoString = " ";

for(;i < students.length;){
    studentsIntoString += students[i+""];
    i++
}

console.log(studentsIntoString);


// for/in loop: The for in loop runs through all the properties of an object, the loop will be executed once for each property of the object.
// syntax : for(let in objects){statements to be executed}
// Example:
function student(){
    let studentt = {fname:"Bishal", lname:"kunwar", phone:9863250,};
    let data = "";
    let y;

    for(y in studentt){
        data +=studentt[y]+" ";
    }

    console.log(data);
};

student()


// The for/in loop can also be used over the properties of arrays. 
// However, it is not advised to use for/in loop over arrays.  
// for/of and Array.forEach() loops are suggested to be used while working with arrays.

// Syntax: for(let in array){statements to be executed}

const array1 = [23, 45, 56, 67];
let container = "";

for (let z in array1){
    container += array1[z]+"\n"; 
}

console.log(container);