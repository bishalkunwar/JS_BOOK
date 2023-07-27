// Using a constructor
function heroPerson(fName, lName){
    this.fName=fName;
    this.lName=lName;
}

// Creating a new instances of person object
let hero1 = new heroPerson("Bishal", "Kunwar");
let hero2 = new heroPerson("shreejan", "acharya");

console.log(hero1.fName);
console.log(hero2.lName);


// The JavaScript Object.create() Method creates a new object, using an existing object as the prototype of the newly created object.