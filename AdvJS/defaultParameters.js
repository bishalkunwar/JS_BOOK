// // default parameters allow us to define a parameter in advance which can be helpful in certain scenarios.
// // In JS the function parameter is undefined.

// ES5
function fun(x,y){
    x = (typeof x!='undefined')?y:4;
    return x+y;
};

console.log(fun(2,3));
console.log(fun(3));


// ES6:=>
function fun(x=10, y=30){
    return x+y;
};

console.log(fun(2,3));