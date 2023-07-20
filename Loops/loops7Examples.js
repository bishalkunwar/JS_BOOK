// In JavaScript, there are 7 types of loops that can be used to execute a block of code repeatedly:
// for, for-in, for-of, while, do-while, forEach, and map. Each loop has its own specific use case and syntax, and choosing the right one depends on the problem you’re trying to solve. It’s important to understand the differences between these loops and when to use each one to write efficient and effective code.

// A for loop is used when you know how many times you need to repeat a certain block of code. It takes three statements.
// Initialization statement.
// Condition Statement.
// Increment statement.

for(let x=0, y=5; x<=10; x++, --y){
    console.log(`${x}\t${y}`);
};

// A while loop is used when you don’t know how many times you need to repeat a block of code, but you know the condition that will end the loop.
// While loop using JS

let x = 5;
while(x<=20){
    
    console.log(x);
    x++;
}


// A do-while loop is similar to a while loop, but the block of code is executed at least once, even if the condition is false.
let y = 4;
do{
    console.log(y);
    y++
}while(y<=20)


// For In Loop
// A for-in loop is used to loop through the properties of an object.
const container = {a:1, b:2, c:3};
for(let properties in container){
    console.log(properties+":"+container[properties]);
};

// For Of Loop
// A for of loop is used to loop through the values of an iterable object such as array.
const array1 = [1,2,3];
for(let values in array1){
    console.log(values);
};


// ForEachLoop
// A forEach loop is a method on arrays that executes a function for each element in the array.
const array2 = [1,2,3];
array2.forEach(values => console.log(values));


// Map Loop
// A map loop is a method on arrays that creates a new array by executing a function on each element in the array.
const array3 = [1,2,3,4]
const newArray3 = array3.map(val => val+1);
console.log(newArray3)
