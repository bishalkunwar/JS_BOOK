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
    const student = {};
    console.log("-------------------------------------------------------")
    console.log("Let's welcome the new student and his/her marks details")
    console.log("-------------------------------------------------------\n")
    student.ID = prompt("Enter the Student ID...")
    student.firstName = prompt("Enter the First Name...")
    student.lastName = prompt("Enter the Last Name...")
    student.email = prompt("Enter the Student Email:...")
    student.phoneNumber = prompt("Enter the Student Phone Number:...")


    student.markSheet = [];

    const subjectNumbers = parseInt(prompt("Enter the number of subjects (max 6 subjects )"));
    if (subjectNumbers <= 0 || subjectNumbers >6){
        console.log("Sorry, one student can have minimum 1 and maximum 6 subjects.")
        return
    };

    let totalCredit = 0;
    for(let x = 0; x<subjectNumbers; x++){
       const subject = prompt(`Enter the ${x+1}: Subject Name`);
       const totalMark = prompt(`Enter the ${subject} total mark`);
       const credit = prompt((`Enter the credit holded by ${subject}\n`));
       
       if( credit <= 0 || credit >= 7){
        console.log("Invalid Credit, must be between 1 to 6,....");
        return;
        }

        let obtainedMarks = parseFloat(prompt(`Marks got by ${student.firstName} ${student.lastName} in ${subject}:... `));

        if(obtainedMarks > totalMark || obtainedMarks < 0){
            console.log("Invalid marks, please enter the valid marks ");
            return;
        };

        totalCredit += credit;
        const marksDetails = {subject, obtainedMarks, totalMark, totalCredit};
        student.markSheet.push(marksDetails);
    };

    if(totalCredit > 36){
        console.log("Total credit exceeds the maximum limit of 36.");
    };

    student.totalCredit = totalCredit;
    student.totalMark = student.markSheet.reduce((total, marks)=>total+marks.totalMark, 0);
    // student.averageMark = calculateAverageScore(student.marksheet);

    students.push(student);
    // console.log(students);
};


const listStudents = () => {
    for(const student of students){
        console.log(`ID: ${student.ID} Name: ${student.firstName} ${student.lastName} Email: ${student.email}`);
    };
}; 


const displayStudentDetail = (student) => {
    console.log(`ID: ${student.ID} Name: ${student.firstName} ${student.lastName} Email: ${student.email}`);
    console.log("Marks Details: ");
    for(const marks of student.markSheet){
        const percentage = (marks.obtainedMarks/marks.totalMark)*100;
        console.log(`Subject: ${marks.subject}, Marks Obtained: ${marks.obtainedMarks}, Total Marks: ${marks.totalMark}, Credit: ${marks.credit}, Percentage: ${percentage.toFixed(2)}% `);

    };
};


const editStudents = () => {

};


const removeStudents = () => {

};

const findStudentByID = (ID) => {
    return students.find(student => student.ID === ID);
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
                const studentDetail = findStudentByID(studentId); // change and manipulate findById method()
                if(studentDetail){
                    displayStudentDetail(studentDetail);
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




