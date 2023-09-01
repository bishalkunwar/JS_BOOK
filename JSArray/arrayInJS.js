// Initialising while Declaring Array.
let friends = ["bishal", "Shreejan", "Alishan"];
console.log(friends);

// accessing array elements in js:
console.log(friends[2]);

// changing elements from a pre-defined array:
friends[2] = "karishma";
console.log(friends);


// Increase and decrease the length/size of array.
friends.length = 5;
friends[3] = "Rupak";
console.log(friends);

// friends.length = 2;
// console.log(friends)

// // Convert array to a string:
// console.log(friends.toString());


// using for loop to access the array elements.
for (let i = 0; i <= friends.length; i++){
    console.log(friends[i]);
};

// we can use forEach function also:
friends.forEach(myFunc);
function myFunc(elements){
    console.log(elements);
};

friends.array.forEach(element => {
    console.log(element);
});

// let fruits = new Array(3);
// fruits[0] = "apple";
// fruits[1] = 10;
// fruits[2] = "banana";

// console.log("Array 1: ", fruits);


// let pennies = new Array(10, 20, 30, 40, 50);
// console.log(pennies);


// let array3 = new Array("3BHK");
// console.log("Array 3: ", array3);


// // Conclusion: Array literals are more efficient.



// Accessing elements of an array:
