// // For-in Loop is JS
// for-in loop in JavaScript is majorly used to access the properties of an object.JavaScript.JavaScript
// for-in loop is great to debug when we need to show the content of the object.JavaScript
// The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”.
// The key values in an object have four attributes (value, writable, enumerable, and configurable). Enumerable when set to “true” means that we can iterate over that property.

// for (let i in obj1) {
//     // Prints all the keys in
//     // obj1 on the console
//     console.log(i);
// }


// Use the for-in loop to iterate over non-array objects. Even though we can use a for-in loop for an array, it is generally not recommended. Instead, use a for loop for looping over an array.
// The properties iterated with the for-in loop also include the properties of the objects higher in the Prototype chain.
// The order in which properties are iterated may not match the properties that are defined in the object.

// example
const courses = {learning: "JavaScript", aim: "Node", extra: "React"};
let properties = "";

// using forin loop to access the properties of the object
for(let prop in courses){
    properties +=  courses[prop]+"\n";
};

console.log(properties);