// Question:- 

// menu driven functional program to add, list, edit, and remove students 
// and to create their marksheets and the results. implement objects inside objects using lists and dictionaries to stores student's details. 
// handle error related to invalid inputs, credit max and subject marks max input. 



// solution.
const prompt=require("prompt-sync")({sigint:true});

const students = []   // an array to sote students details.


const displayMenu = () => {
    
    console.log("------------------------------------------");
    console.log("Enter the following options");
    console.log("------------------------------------------");

    console.log("1. Add a student and create marksheet");
    console.log("2. Plot all student's data and their marksheet");
    console.log("3. Edit a student's details and the marksheet");
    console.log("4. Remove student's Details and the corresponding marksheet details");

};


const main = () => {
    
    console.log("***Welcome to Student's Marksheet***")

    while(true){
        displayMenu();

        const choice = parseInt(prompt("Enter any choice: "));
        
        if(choice===1){console.log("Hello");}
        else if(choice===2){break;}
        else{console.log("invalid choice")}
    }

};

main(); 




