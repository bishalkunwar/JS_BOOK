// // // Map vs Reduce vs Filter

// // // map array method in js
// // let array1 = [3,4,5,6,7];

// // //let addition = (element)=>{return element+2;};

// // var array2 = array1.map(addition);

// // console.log(array1);
// // console.log(array2);

// // function addition(element){
// //     return element+2;
// // };


// // array map example with the strings array.
// let students = [
//     {firstName: "Bishal", lastName: "Kunwar"},
//     {firstName: "Shreejan", lastName: "Acharya"},
//     {firstName: "Nishant", lastName: "Neupane"}
// ];

// let fullStudents = (item) => {return item.firstName+ " "+ item.lastName+" "};

// let allStudents = students.map(fullStudents);
// console.log(allStudents);



// // Filter function in JS.
// const ages = [23, 34, 45, 56, 78, 2, 3, 4];
// let checkAdult = (age)=> {return age >= 18};
// let result = ages.filter(checkAdult);

// console.log(result);



// // Array Reduce method in JS:
// const marks = [23,24,25,26];
// let averageMarks = (total,nums)=> {return total/nums};
// let avgMarks = marks.reduce(averageMarks);

// console.log(avgMarks); this is wrong,


// JS forEach array method:
const students = {lName: "bishal", fName: "kunwar", age: 24};

Object.entries(students).forEach(([key, value])=>{
    console.log(`${key} : ${value}`);
});

