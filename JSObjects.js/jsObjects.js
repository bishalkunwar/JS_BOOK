// // // JavaScript is an object-based language based on prototypes, rather than being class-based. Because of this different basis, it can be less apparent how JavaScript allows you to create hierarchies of objects and to have an inheritance of properties and their values.

// // // creating object with the constructor
// // // constructor is nothing but a function with the new keyword.
// // // the constructor allows us to create multiple object of same flavor.

// // // simple function with constructor in the object.
// // function rental(name, address, area){
// //     this.name = name;
// //     this.address = address;
// //     this.area = area;
// // }

// // // new keyword to create an object
// // let rent1 = new rental ("queenBasement", "Scarborough", "1200sq");4

// // // property accessories
// // console.log(rent1.name);



// // objects creation using object literals
// // Literals are smaller and simpler ways to define objects. We simply define the property and values inside curly braces as shown below:

// let cycle = {
//     name: "Trek",
//     maker: "BMW",
// };

// // property accessor:
// console.log(cycle.maker); // dot notation
// console.log(cycle['name']); // bracket notation.

// // Adding property to the object
// cycle.brakeType = "manual";

// // check it
// console.log(cycle);




// // adding methods to the object.
// let car = {
//     name : 'GT',
//     maker : 'BMW',
//     engine : '1998cc',
//     start : function(){
//         console.log('Starting the engine...');
//     }
// };
// car.start();
// // Adding method stop() later to the object
// car.stop = function() {
//     console.log('Applying Brake...');  
// }
// car.stop();




// // Creating Object with the Object.create()
// // The Object.create() method creates a new object, using an existing object as the prototype of the newly created object
// const letsCode = {
//     isActive: false,
//     printIntrod: function(){
//         return(`name is ${this.name} but is learning? ${this.isActive}`);
//     }
// };

// let whoCodes = Object.create(letsCode);
// whoCodes.name="Bishal";
// whoCodes.isActive=true;
// console.log(whoCodes.printIntrod());




// Another way is es6 Classes.
class owner{
    constructor(money, property, car){
        this.money=money;
        this.property=property;
        this.car=car;
    }
};

let owner1 = new owner("2000", "hourse", "bmw");
console.log(owner1.money);
