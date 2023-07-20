// // The in operator is an inbuilt operator in JavaScript which is used to check whether a particular property exists in an object or not.
// // It returns a boolean value true if the specified property is in an object, otherwise, it returns false.

// // Syntax:- property in object

// // Example:

// function array1(){
//     const array1 = ['Bishal', 'is', 'Learning']

//     // Output of the indexed number:
//     console.log(0 in array1);
//     console.log(3 in array1);

//     // Output of the value:
//     console.log('Bishal' in array1);
//     console.log("ram" in array1);

//     // Output of the array property:
//     console.log("length" in array1);
// };

// array1();



// in operator in object

const objects = {
    name: "Bishal",
    role: "hero",
    phone: 123456,
};

console.log("name" in objects);

delete objects.name;
console.log("name" in objects);

// if ("name" in objects){objects.name= "shreejan";}else{console.log("property already deleted");};
// console.log(objects.name);

if ("name" in objects ===  false){objects.name= "shreejan";}else{console.log("property already exist");};
console.log(objects.name);



