// // A function generator is aslike the normal functin but when ever it needs to generate a value it uses yield rather than the return.
// // the yield statement suspends the function execution and sends a value back to caller.
// // the yield retains the enough state to enable the function to resume where it is left off.

// // In this example, we will see the creation of basic generator object.
// function * fun(){
//     yield 10;
//     yield 20;
//     yield 30;
// };

// // let's call the generator function:
// let gen = fun();
// console.log(gen.next().value);
// console.log(gen.next().value);
// // console.log(gen.next().value);


// // function generator to print series of natural numbers:
// function* naturals(){
//     let numberInit = 1;

//     // infinite generation=>
//     while(true){
//         yield numberInit++
//     };

// };

// // calling the generate function:
// let generate = naturals();

// for(let x = 0; x<= 10; x++){
//     console.log(generate.next().value);
// }



// // Example of yield*=>
// const arr = [3,5,7];

// function* letsGen(){
//     yield 1;
//     yield* arr;
//     yield 12;
// };

// for (let values of letsGen()){
//     console.log(values);
// };


// Example of ""return" from a generator function:
function* generate(){
    yield "a";
    return "result";
    yield "checked";
};

let check = generate();

console.log(JSON.stringify(check.next()));
console.log(JSON.stringify(check.next()));
console.log(JSON.stringify(check.next().value));