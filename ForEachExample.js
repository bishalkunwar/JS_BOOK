const students =[

	{id: 1, name: "bishal", age: 23, marks: [1,2,3,4,5]},
	{id: 2, name: "sujan", age: 24, marks: [1,2,3,4,5]},
];

students.forEach(student=>{
    for(const[key,value] of Object.entries(student)){
        console.log(`${key} : ${value}`)
    }
});
