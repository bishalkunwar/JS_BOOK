// Global Variable: These are variables that are defined in global scope i.e. outside of functions. These variables have global scope, so they can be accessed by any function directly. A variable declared without a keyword is also considered global even though it is declared in the function.
// Local Variable: In JavaScript, local variables are variables that are defined within functions.  Accessing them outside the function will throw an error


let horseName = "RamBhai" // Global declaration

horseContainer()

function horseContainer() {
    diet = "chana" // this will be considered global
    console.log(diet+ "is an example of"+ typeof diet);

    let trainer = "Dipendra";
    console.log(trainer+ "is an example of"+ typeof trainer);
}

console.log(diet+ "is an example of"+ typeof diet);
// console.log(trainer+ "is an example of"+ typeof trainer);


myfunction();
anotherFunc();
let petName;
function myfunction() {
    let petName = "Sizzer"; // local variable
    console.log(petName);
}
function anotherFunc() {
    let petName = "Tom"; // local variable
    console.log(petName);
}
console.log(petName);