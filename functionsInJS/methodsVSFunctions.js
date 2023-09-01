// // js functions.

// function factorials(a,b){
//     let sum = a+b;
//     return sum;
// };

// console.log(factorials(3,5));



// JS Methods.

let employee = {
    empName: "Bishal",
    department: "Sales",
    details: function(){
        return this.empName +" works with this "+ this.department;
    }
};

console.log(employee.details());

