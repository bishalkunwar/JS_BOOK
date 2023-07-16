// JavaScript Functions: JavaScript functions are the blocks of code used to perform some particular operations. JavaScript function is executed when something calls it. It calls many times so the function is reusable.

// JS Function example.

// Function definition.
function exampleFunction(){

    // Declare some variable and strings.

    let myNumber = "9818087244";
    let myName = "iamBishal";

    return myNumber, myName;
    // This returns only myName 
    // I'll be learning and implementing how to return multiple variables as an array or as an object.
}

function PrintFunc(){

    // Calling another function here.
    // let number, name;
    let number, name = exampleFunction();
    console.log(`name is: ${name} number is: ${number}`);
}

PrintFunc();