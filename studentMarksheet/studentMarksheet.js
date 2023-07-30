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
    console.log("5. Exit")
};


const addStudents = () => {


};


const listStudents = () => {

}; 

const displayStudentDetail = () => {

};


const editStudents = () => {

};


const removeStudents = () => {

};

const main = () => {
    
    console.log("***Welcome to Student's Marksheet***")

    while(true){
        displayMenu();

        const choice = parseInt(prompt("Enter any choice: "));
        
        if(choice===1){
            addStudents();
        } 

        else if(choice===2){
            listStudents();
            const studentId = prompt("Enter Student ID to view the details or press zero 0 to exit.");
            if(studentId !== "0"){
                const studentDetail = findstdbyID(studentId); // change and manipulate findById method()
                if(studentDetail){
                    displayStudentDetail();
                }else{
                    console.log(" Student with this ID do not exist, Sorry!");
                }
            }
        }

        else if(choice ===3){
            editStudents();
        }

        else if(choice===4){
            removeStudents();
        }

        else if(choice===5){
            break;
        }

        else{
            console.log("Invalid choice, please try again.")
        }
    };

};

main(); 




