// Function Declaration vs Function Expression vs Arrow Functions.


// Function Declaration:
function product(x,y){
    console.log(x*y);
}

product(3,4);



// Function expression.
const product1 = function(x,y){
    console.log(x*y);
}

product1(5,6);



// arrow function.
let product2 = (x,y) => x*y;

console.log(product2(7,8));