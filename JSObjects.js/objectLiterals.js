// Object: An object is a unique entity that contains properties and methods. for example, a bike is the real life object which has characters like color, type, model and etc and actions like ride, stunt etc, actions are always the methods 
// A method in JS is a property of an object whose value is a function.
// -- object can be created using object literals and object constructors


// Object Creating using object literals.
// Object Definition.
let heroPerson = {
    fName: "Bishal", lName: "Kunwar",

    // method creating.
    getHero: function(){
        return(`The name ${heroPerson.fName} ${heroPerson.lName} is a hero.`);
    }, 

    // object within object:
    contacts: {
        email: "bishal@gmail.com", cell: "9875644",
    }
};

console.log(heroPerson.getHero());
console.log(heroPerson.contacts.email);