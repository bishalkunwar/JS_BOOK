
// // function that returns product of two numbers.
// function product(a,b){
//     return a*b;
// }


// // calling product () function.
// let result = product.call(this, 10,2);
// console.log(result);




// function call with arguements:
let staffs = {
    details: function(designation, experience){
        return this.name
        + " "
        + this.id 
        + designation 
        + experience ;
    }
}

// object declaration:
let staff1 = {
    name: "bishal", 
    id: "123",
}

let staff2 = {
    name: "Shreejan", 
    id: "345",
}


let x = staffs.details.call(staff1, " Operator", " 2 Years");
let y = staffs.details.call(staff2, " HR", "4 Years");

console.log(x);
console.log(y);




// example of binding function to an object:
let obj = {x: 23, y: 34}

function sum(){
    return this.x + this.y
};

console.log(sum.call(obj));