function display(){
    return("Hahahaha");
}

(function(){
    console.log("Helloo")
})();


let displayed = ((a)=>{
    return(`this is ${a}`)
})(2);

console.log(displayed);



difference between normal function and anonymous function is that:
a normal function carry out certain operation or task, when the function is called it executes that particular task for which the function has called, it gets accessed directly when we do call it, and basically normal functions are hoisted.a
Whereas:
anonymous function is a function that does not have any name associated with it i.e. this was created without any identifier or name referring it, even if we refer it aslike if we use arrow function for this one, then make sure not to call that as a function, that must be called as a variable without no any arguements passing to that call.
An anonymous function can be useful for creating IIFE(Immediately Invoked Function Expression). and anonymous functions cannot be hoisted.