// // An Example of Statically Typed Language:
// // code in reference to the Java standard for understanding

// // int x = 10;
// // String y = "hello" , now these values are fixed to the reference variables

// // Dynamically Typed Language:

// // let x = 67;
// // let man = "Bishal"
// // console.log(`Name ${man} has score ${x}`)

// // x = 89;
// // man = "Kunwar";
// // console.log(`Name ${man} has score ${x}`)

// // // When we run this, we can easily see the difference.

// // let variable
// let x; // undefined
// let namee = 'Bishal';
// console.log(namee);

// // null example

// let name1 = null
// name1 = "Yam Prasad";
// console.log(name1)

// // // Can also declare multiple values
// // let a=1,b=2,c=3;

// // Assignment
// let a = 3;
// a = 4; // works same as var.
// console.log(a)


// // Const is another variable type assigned to data whose value cannot and will not change throughout the script. It is a stricter version of let.

// // const student = 'Bishal';
// // student = 'Shreejan';
// // // will give Assignment to constant variable error.


// // Variable Scope in Javascript: The scope of a variable is the part of the program from which the variable may directly be accessible. 

// // In JavaScript, there are two types of scopes: 

// // Global Scope: Scope outside the outermost function attached to the window.
// // Local Scope: Inside the function being executed.

// let varGlobal = "This is a global var example";

// function scopeExamples() {
//     let varLocal = "This is a local variable";

//     console.log(varGlobal +"\n"+varLocal)
// }

// scopeExamples()

// console.log(varGlobal) // This will work
// // console.log(varLocal) // this throws error



