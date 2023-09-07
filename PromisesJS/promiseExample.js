// let promiseCondition = new Promise(function(resolve, reject){
//     const x = "Bishal";
//     const y = "Bishal";

//     if(x===y){
//         resolve();
//     }else{
//         reject();
//     };
// });


// promiseCondition.then(function(){
//     console.log("Success, it matched.");
// }).catch(function(){
//     console.log("Some error has occoured");
// });


let promise = new Promise(function(resolve, reject){
    // resolve("OPS Great");
    reject("Promise Rejected");
});

// promise.then(function(SuccessMessage){
//     console.log(SuccessMessage);
// }, function(errorMessage){
//     console.log(errorMessage);
// }); 

promise.then(function(SuccessMessage){
    console.log(SuccessMessage);
}).catch(function(errorMessage){
    console.log(errorMessage);
});

