// Destructuring in JS basically means the breaking down of a complex structure (Objects and Arrays) into simple parts.
// with the destructuring assaignment, we can unpack array objects into a bunch of variables.


// // Object Destructuring:
// // Destructuring in JS basically means the breaking down of a complex structure(Objects or Arrays) into simple form.

// // ES5 Destructuring:=>
// const college = {
//     cName: "Lambton",
//     cAddress: "Yorkdale",
//     isPrivate: false,
//     established: 1990,
// };

// let cName = college.cName;
// let address = college.cAddress;
// let established = college.established;

// console.log("college details are"+ cName+" "+established); 


// ES6 Destructuring:=>
const college = {
    cName: "Lambton",
    cAddress: "Yorkdale",
    isPrivate: false,
    established: 1990,
};

// let {cName, cAddress, isPrivate, established} = college;  // Reference variables must be same to the variable name while destructuring.
// console.log(`${cName} ${cAddress} ${isPrivate} ${established}`);

let {cName, established} = college;
console.log(`${cName} ${established}`);


// Array Destructuring:=>
const players = ['messi', 'ronaldo', 'neymar'];

// let [player1, player2, player3] = players;
// console.log(player1);

let [player1,, player3] = players;
console.log(player3);


