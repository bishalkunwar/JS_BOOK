// Javascript this keyword alywas holds the reference to a single object, which defines the current line of code's execution context which means this keyword refers to the object that is currently executing the code.
// Implict Binding, Explict Binding, Default Binding, Arrow Function Binding.


// Implict Binding=>
// When we call a function as a method of the object this keyword refers to the calling object.

const player = {
    name: "Bishal",
    age: 27,

    greet: function(){
        return(`Hello ${this.name} is ${this.age}`);
    }
};

console.log(player.greet());
// Here, this keyword is referring to the player object so it can access name and age values.


// Explict Binding.
// When we explictly bind this keyword using the call(), bind() or apply() method then this keyword default reference is changed to the object called using the above specified method.

function addressVerify(){
    if(this.address === "Baglung"){
        console.log(`${this.address} is a good address`);
    }else{
        console.log(`${this.address} maynot be the good address`);
    }
};

const man1 = {address: "Pokhara"};
const man2 = {address: "Baglung"};

addressVerify.call(man1);
addressVerify.call(man2); 



// Arrow Function Binding:=> When this is used in the arrow function then this has lexical scope so without the function keyword this is unable to refer to the object in the outer scope.
const frinds = {
    name: "Luffy",
    age: 25,

    greet: ()=>{
        return `Hello, ${this.name} is ${this.age} old`;
    }
};

console.log(friends.greet());
