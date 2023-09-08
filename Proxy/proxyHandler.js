// // JavaScript Proxy is an object which intercepts- (stops/interrupts) another object and resists/blocks the fundamental operations in it. 
// // This object is mostly used when we want to hide information about one object from unauthorized access. 
// // Proxy consists of Target and Handler.
// // Target is a JS object on which proxy is applied and the handler object contains the function to intercept any other operations on it.


// // Syntax: const proxy = new Proxy((tar, handle))


// // Example of proxy with only target not the handler.:
// let data = {
//     name: "raj",
//     course: "Science",
// };

// const proxy = new Proxy(data, {});

// console.log(proxy.name);


// // Example of handler function to incercept call on the target object:
// let data1 = {
//     name: "raj",
//     course: "Science",
// };

// const prox = new Proxy(data1, {
//     get: function(){
//         return "unauthorized"
//     }
// });

// console.log(prox.name);


// // Example 3:
// let data2 = {
//     name: "raj",
//     course: "Science",
// };

// const proxyApp = new Proxy(data2, {
//     get: function(tar, property){
//         if(property == "course"){
//             return  undefined;
//         }
//         return tar[property];
//     }
// });

// console.log(proxyApp.name);
// console.log(proxyApp.course);


const courseDetails = {
    name: "Shreejan",
    age: "4 months",
    status: "student",
};

const handler = {
    deleteProperty(target,prop){
        if(prop in target){
            delete target[prop];
            console.log(`removed ${prop}`);
        }else{
            console.log(" Property not in target.");
        }
    }
};

const prox = new Proxy(courseDetails, handler);

console.log(prox.age);
delete prox.age;
console.log(prox.age);

delete prox.ram;
console.log(prox.ram);



