// Inheritance: It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects. 

// Inheritance Example:
class person{
    constructor(name){
        this.name=name;
    }

    // method to return to a string
    nameCall(){
        return(`Name is ${this.name}`);
    };
};

class student extends person{
    constructor(name, id){
        // super keyword for calling the above
        // class constructor 
        super(name);
        this.id=id;
    }

    nameCall(){ // method overriding example
        return(`${super.nameCall()}  student id: ${this.id}`);
    }
}

let student1 = new student("Bishal", "c089");
console.log(student1.nameCallCall());


// The Person and Student objects both have the same method (i.e toString()), this is called Method Overriding. Method Overriding allows a method in a child class to have the same name(polymorphism) and method signature as that of a parent class. 
// In the above code, the super keyword is used to refer to the immediate parent class’s instance variable. 

// Polymorphism
// Polymorphism: Polymorphism is one of the core concepts of object-oriented programming languages. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. Polymorphism can be achieved by method overriding and method overloading