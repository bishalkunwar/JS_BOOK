// Abstraction means displaying only essential information and hiding the details, data abstractionrefers to providing only essential information about the data to the outside world. hiding the background details or implementation.
function person(fName, lName){
    let firstName = fName;
    let lastName = lName;

    let getAccess = function(){
        return (`First name is: ${firstName} Lastname is: ${lastName}`);
    }

    this.giveAccess = function(){
       return (`First name is: ${firstName} Lastname is: ${lastName}`);
    }
}

let person1 = new person("Bishal", "Kunwar");
console.log(person1.getAccess);
console.log(person1.giveAccess());



// // Encapsulation:- The process of wrapping properties and functions within a single unit is known as encapsulation.
// // Encapsulatio Example
class student{
    constructor(name, id){
        this.name=name;
        this.id=id;
    }

    add_address(address){
        this.address=address;
    }

    getDetails(){
        return(`${this.name} has id ${this.id} and is from ${this.address}`);
    };
};

let student1 = new student('Bishal', 'c089');
student1.add_address('Nepal');
console.log(student1.getDetails());

// // Note:
// // Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but there are no such access modifiers in JavaScript, there are certain ways by which we can restrict the scope of variables within the Class/Object. 
