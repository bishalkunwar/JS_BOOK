// // Delete is comparatively a lesser-known operator in JavaScript. 
// // This operator is more specifically used to delete JavaScript object properties.

// // The JavaScript pop(), shift(), or splice() methods are available to delete an element from an array.
// // But because of the key-value pair in an object, deleting is more complicated.
// // Note that, the delete operator only works on objects and not on variables or functions.


// // Syntax:
// // delete object
// // // or
// // delete object.property
// // // or
// // delete object['property'] 


// // Parameter: It does not take any parameter.
// // Return type: This operator returns true if it removes a property. While deleting an object property that doesn’t exist will return a true but it will not affect the object. Though while trying to delete a variable or a function will return a false.


// let student = {
//     name: "Bishal", address: "Scarborough", contact: 989898
// }

// console.log(delete student.address);
// // delete student.contact
// console.log(student);


// // not possible OR false case:

// let num1 = 12345;
// let sum = (a,b)=> {
//     return a+b;
// }

// console.log(delete num1);
// console.log(delete sum) 

// // Because the delete operator doesn’t work for variables or function, it returns false and the actual variables and functions remain untouched.

// Another thing to keep in mind is that this operator doesn’t delete property value rather the property itself.
let friend = {
    name: "Nishant Gandu", phone: 12345
}

let friendPhone = friend.phone;
console.log(delete friend.phone);
console.log(friendPhone); // As objects are reference types, so both the person.phone and phone variable will refer to the same memory address.

// whereAs OR Exception: Global variables can be removed using the delete operator. Because the global variables are properties of the window object and as delete works on objects, it’ll delete the variable.

delChecker = 345;

// true case check
console.log(delete delChecker);

// delChecker is not defined anymore
// console.log(delChecker); 

// ReferenceError: delChecker is not defined