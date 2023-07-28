// // JSON == JavaScript Object Notation (JSON) is a tex-based, human readable interchange format used for representing simple data structures and objects in web browser-based code. 
// // JavaScript Objects can only exist within the JavaScript language, so when you are working with data that needs to be accessed by various languages, it is best to refer to JSON.

// // Rules to declare an object 
// // -The object is always defined inside the curly brackes {}.
// // -The objects are written in key pairs.
// // -The key must be String, and their values must be a valid JSON data type. The JSON data types can be Number, String, Object, boolean, array or null
// // -The keys and values are separated by a ConvolverNode(":").
// // -Each key or Value pair is separated by a comma. 

// // Syntax
// myOrders = {};

// myOrder = {
//     "name of product": "nokia 350",
//     "cost": "897",
//     "warranty": "2 year"
// };

// // to Access Object Values:
// // The object values can be accessed by using the dot (“.”) notation.
// // We can also access objects by using bracket([]) notation

// let mobileCollection, x, x1;

// //object is created using the mobileCollection.
// mobileCollection = {
//     "productName": "Nokia69",
//     "cost":"699",
//     "warranty": "2 years"
// };

// // To access particular details
// // from object mobileCollection
// x = mobileCollection.productName;
// x1 = mobileCollection["cost"];
// console.log(x);
// console.log(x1);



// // Nesting of objects in JSON
// resturant = {
//     "shortie": "Veg Roll",
//     "coffee": "Cap69",
//     "lunch": {
//         "lunch1": "Chowmein",
//         "lunch2": "momo"
//     }
// };

// let y = resturant.lunch.lunch1;
// let y1 = resturant.lunch["lunch2"];
// console.log(y);
// console.log(y1); 

// // Modify values of object: two modify the values, we have two ways.


// // Looping an Object: looping can be done in two ways.
// // - looping of an object can be done by using a property for-in loop.
// // - for looping an object we can even use brackets ("[]") in the for-in loop property. 

let myOrder, a;
  
myOrder = {
    "nameofproduct": "earbuds",
    "cost": "799", 
    "warranty": "1 year"
};
  
for (a in myOrder) {
  
    // Accessing loop object 
    // using dot notation
    console.log(myOrder.a+" "+myOrder[a]);
}
