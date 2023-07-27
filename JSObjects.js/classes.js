// // classes are the blueprints of an object and objects are the instances of classes, in easy term: in classes we can define our own data structures.

// // Traditional way of defining an object and simulating them as classes:


// // defining classes in a traditional way.
// function Car(name, maker, engine){
//     this.name=name,
//     this.maker=maker,
//     this.engine=engine
// };

// Car.prototype.getDetails = function(){
//     console.log('The car '+this.name+ ' was made by ' +this.maker+ ' engine used is '+this.engine);
// };

// let sedanCar = new Car('Hayabusa', 'Maruti', '2000CC');
// let car2 = new Car('Toyota Rav4', 'Toyota', '2800CC');

// console.log(sedanCar.name, sedanCar.engine);
// console.log(car2.getDetails());



// ES6 Classes.
class Car {
    constructor(name, maker, model){
        this.name=name;
        this.maker=maker;
        this.model=model;
    }

    getDetails(){
        return(`Car ${this.name} was made by ${this.maker} and the model is ${this.model}`);
    }
};

// making the objects and envoking the properties.
let myCar = new Car('Hayabusa', 'Maruti', '2000CC');
let mySecCar = new Car('Toyota Rav4', 'Toyota', '2800CC');

console.log(myCar.name);
console.log(mySecCar.getDetails());