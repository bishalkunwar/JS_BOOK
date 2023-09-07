// Few set methods and trends practices:

const mySet = new Set([12, 14, 23, 45, 23]);

mySet.add("Hello").add("World").add("I").add("am getting").add("Fucked up");

// // Accessing set elements using for loop;
// for(const values of mySet){
//     console.log(values);
// };


// mySet.forEach(function(values){
//     console.log(values);
// });


// // iterating/accessing over data of the set:
// let iterateDate = mySet.values();
// for(let val of iterateDate){
//     console.log(val);
// };


console.log(mySet);

// Set Sorting:
let dataArray = [];
for (let elem of mySet){
    dataArray.push(elem);
};

console.log(dataArray);

dataArray.sort();

mySet.clear();

for(let elem of dataArray){
    mySet.add(elem);
};

console.log(mySet);




// Spread Operator and Sort Method:
const sortedArray = [...mySet].sort();
const newSet = new Set(sortedArray);

console.log(newSet);
