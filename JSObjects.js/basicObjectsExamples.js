// // Objects in JS are the most important data types and form the building blocks of modern JavaScript. 
// // An object is a composite value: it aggregates multiple values (primitive
// // values or other objects) and allows you to store and retrieve those
// // values by name. An object is an unordered collection of properties,
// // each of which has a name and a value. Property names are usually
// // strings

// // Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.
// // An object is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.
// // Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.
// // An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and the value can be anything.

// // The property names can be strings or numbers. In case the property names are numbers, they must be accessed using the “bracket notation” like this.


// // Code Syntax:
// new Object(value)  // Object()  can be called with or without new. Both create a new object.
// Object(value)

// let objectName = {
//     key:value
//     ...
// }


// Code Examples:-
let student = {
    fullName: "Bishal Kunwar",
    "permanent address": "Nepal",
    location: "Scarborough Canada",
    23: 25,

    infoDisplay: function(){
        console.log(`The student ${student.fullName} from ${student["permanent address"]} is from ${student.location.split(' ')[1]} and is of age ${student['23']}`);
    }



}

student.infoDisplay();