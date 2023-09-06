// // // Map is aslike the alternate to object in JS, which stores the collection of elements in a key value pair. Map objects can hold both objects and primitive values as either key or value. 
// // // When we iterate over the map object it returs he key and value pair in the same order as inserted. 
// // // Map() constructor is used to create map in javascript.

// // let map1 = new Map([[1,10], [2,20], [3,30], [4,40], [5,50]]);

// // console.log(`Map 1: `);
// // console.log(map1);


// // let studentsMap = new Map([
// //     ["firstName", "Bishal"],
// //     ['lastName', "Kunwar"],
// //     ["website", "RamRam"]
// // ]);

// // console.log("Student Detail: ");
// // console.log(studentsMap);
// // // let stringStudent = JSON.stringify(studentsMap)
// // // console.log(stringStudent);  


// let familyDetails = new Map();

// familyDetails.set("father", "Hero");
// familyDetails.set("mother", "heroin");
// familyDetails.set("address", "Baglung")
//                 .set("neighbour", "adhikari")
//                 .set("friend", "Tara DD");

// console.log(familyDetails);

// // variable.has() example.
// console.log("Our Family has Father: " + 
//             "Our family has mother" + familyDetails.has("mother") 
//             + "Do we have address ? " + familyDetails.has("Baglung")
//             + "Do we have relative ? " + familyDetails.has("Relative"));


// // variable.get() 
// console.log("Get value for friend: " + familyDetails.get("friend")
//             + ("Get value false condition check: ") + familyDetails.get("brother"));


// // variable.delete()
// console.log("Delete element with key neighbour: " + familyDetails.delete("neighbour"));
// console.log("Delete element with key sister: " + familyDetails.delete("sister"));


// // // variable.clear()
// // console.log("Clear element mother: " + familyDetails.clear("mother"));

// console.log(familyDetails);

// const familyStr = Object.fromEntries(familyDetails);
// const serialized = JSON.stringify(familyStr);

// console.log(serialized);


// // for loop to access key value pair from map object.
// for(let [key, value] of familyDetails){
//     console.log(`${key} is ${value}`);
// };

// // for each loop to access key value pair from map object.
// familyDetails.forEach((value, key)=>{
//     console.log(`${key} is ${value}`);
// });

// let keyItems = familyDetails.keys();
// let valueItems = familyDetails.values();

// let keyArray = [];
// let valueArray = [];

// for (let items of keyItems){
//     keyArray.push(items);
// };

// for (let items of valueItems){
//     valueArray.push(items);
// };

// console.log(keyArray);
// console.log(valueArray);


// function print(values, keys){
//     console.log(`${keys} is ${values}`);
// };

// familyDetails.forEach(print);


// // // Sorting keys and values in map object.
// // // Array.from().sort() method

// // const ascDetails = Array.from(familyDetails).sort((a,b)=> a[1]-b[1]);
// // const descDetails = Array.from(familyDetails).sort((a,b)=>b[1]-a[1]);

// // console.log(`Ascending Sort: ${ascDetails}`);
// // console.log(`Descending Sort: ${descDetails}`);



// // map1 = new Map([...map.entries()].sort((a,b)=>a[0]-b[0]));

// // sort based on keys .
// const keySort = new Map([...familyDetails].sort((a,b)=>String(a[0]).localeCompare(b[0])));
// console.log(keySort);


// result = []
// len = familyDetails.length;
// for (let j = len-1; j >=0; j--){
//     result.push(familyDetails[j]);
// };

// console.log(result);


// // sort based on values.
// const valueSort = new Map([...familyDetails].sort((a,b)=>String(a[1]).localeCompare(b[1])));
// console.log(valueSort); 




// // Creating an empty map
// const myMap = new Map();
 
// // Creating a set by inserting the key-value pair
// console.log(myMap);
 
// myMap.set("info", { name: "Sam", age: 36 });
 
// // Access the elements of a Map
// console.log(myMap);



// // Converting object to map in JS
// let family = {
//     father: "money",
//     mother: "love",
//     brother: "fun",
//     sister: "care"
// };

// function familyMap(){
//     const mapped = new Map(Object.entries(family));
//     return(mapped);

//     // mapped.forEach((values, keys)=>{
//     //     console.log(keys+" is "+ values);
//     // })
// };

// console.log(familyMap());

// // Converting map to object in js
// const objected = Object.fromEntries(familyMap());
// console.log(objected);


// // normary array reversal.
// let array1 = [ "hello", "bishal", 12, 24];
// // let reversedArray = array1.reverse();
// // console.log(reversedArray);

// // reversal using loop;
// let loopReversed = [];
// for(let x = array1.length-1; x>=0;x--){
//     // loopReversed.push(array1[x]);
//     let elementReversed = [];
//     for (let y = `${array1[x]}`.length-1; y>=0;y--){
//         elementReversed.push(`${array1[x]}`[y]);
//     } 
//     loopReversed.push(elementReversed.join(""))
// };
// console.log(loopReversed);


// // creating new array:
// let arr1 = [1,2,3,4,5];

// function reversal(){
//     let newArr = arr1.map((item)=>arr1[arr1.length-item]);

//     console.log(newArr);
// };

// reversal();



/* Printing the name of players who does play only football game 
    by applying filter and map method. */

let students = [
    {id: 123, name: "Bishal", sports: "hockey", score: 23},
    {id: 124, name: "Shreejan", sports: "Rugby", score: 24},
    {id: 125, name: "Nishant", sports: "Fucker", score: 34},
    {id: 126, name: "Alishan", sports: "hockey", score: 56}
]; 

// apply .filter() and .map() method.
// let hockyPlayers = students.filter

let hockyPlayers = students.filter(function(player){
    return player.sports === "hockey";
}).map(function(player){
    return player.score;
}).reduce(function(sum, score){
    sum = sum+score;
    return sum;
});

// hockyPlayers.forEach(function(result){
//     console.log(result);
// });

console.log(hockyPlayers);

