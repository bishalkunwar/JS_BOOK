
// const students =[

// 	{id: 1, name: "bishal", age: 23, marks: [1,2,3,4,5]},
// 	{id: 2, name: "sujan", age: 24, marks: [1,2,3,4,5]},
// ];

// students.forEach(student=>{
//     for(const[key,value] of Object.entries(student)){
//         console.log(`${key} : ${value}`)
//     }
// });


const students =[

	{id: 1, name: "bishal", age: 23, marks: [1,2,3,4,5]},
	{id: 2, name: "sujan", age: 24, marks: [1,2,3,4,8]},
];

students.forEach(student=>{
    let greater = student.marks[0];
    student.marks.forEach(mark=>{
        if(mark > greater){
            greater = mark;
        }
    });
    
    for(const[key,value] of Object.entries(student)){
        console.log(`${key} : ${value}`)
    }
    
    console.log(`the greater mark of ${student.name} is ${greater}`);
});


// another rough way to find the greater from the array inside the object
// if (Array.isArray(value)) {
//             value.forEach(mark => {
//                 if (mark > greater) {
//                     greater = mark;
//                 }
//             });
//         }
