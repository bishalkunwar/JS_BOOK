// // Map is aslike the alternate to object in JS, which stores the collection of elements in a key value pair. Map objects can hold both objects and primitive values as either key or value. 
// // When we iterate over the map object it returs he key and value pair in the same order as inserted. 
// // Map() constructor is used to create map in javascript.

// let map1 = new Map([[1,10], [2,20], [3,30], [4,40], [5,50]]);

// console.log(`Map 1: `);
// console.log(map1);


// let studentsMap = new Map([
//     ["firstName", "Bishal"],
//     ['lastName', "Kunwar"],
//     ["website", "RamRam"]
// ]);

// console.log("Student Detail: ");
// console.log(studentsMap);
// // let stringStudent = JSON.stringify(studentsMap)
// // console.log(stringStudent);  


let familyDetails = new Map();

familyDetails.set("father", "Hero");
familyDetails.set("mother", "heroin");
familyDetails.set("address", "Baglung")
                .set("neighbour", "adhikari")
                .set("friend", "Tara DD");

console.log(familyDetails);

// variable.has() example.
console.log("Our Family has Father: " + 
            "Our family has mother" + familyDetails.has("mother") 
            + "Do we have address ? " + familyDetails.has("Baglung")
            + "Do we have relative ? " + familyDetails.has("Relative"));


// variable.get() 
console.log("Get value for friend: " + familyDetails.get("friend")
            + ("Get value false condition check: ") + familyDetails.get("brother"));


// variable.delete()
console.log("Delete element with key neighbour: " + familyDetails.delete("neighbour"));
console.log("Delete element with key sister: " + familyDetails.delete("sister"));


// // variable.clear()
// console.log("Clear element mother: " + familyDetails.clear("mother"));

console.log(familyDetails);

const familyStr = Object.fromEntries(familyDetails);
const serialized = JSON.stringify(familyStr);

console.log(serialized);


// for loop to access key value pair from map object.
for(let [key, value] of familyDetails){
    console.log(`${key} is ${value}`);
};

// for each loop to access key value pair from map object.
familyDetails.forEach((value, key)=>{
    console.log(`${key} is ${value}`);
});

let keyItems = familyDetails.keys();
let valueItems = familyDetails.values();

let keyArray = [];
let valueArray = [];

for (let items of keyItems){
    keyArray.push(items);
};

for (let items of valueItems){
    valueArray.push(items);
};

console.log(keyArray);
console.log(valueArray);


function print(values, keys){
    console.log(`${keys} is ${values}`);
};

familyDetails.forEach(print);


// // Sorting keys and values in map object.
// // Array.from().sort() method

// const ascDetails = Array.from(familyDetails).sort((a,b)=> a[1]-b[1]);
// const descDetails = Array.from(familyDetails).sort((a,b)=>b[1]-a[1]);

// console.log(`Ascending Sort: ${ascDetails}`);
// console.log(`Descending Sort: ${descDetails}`);



// map1 = new Map([...map.entries()].sort((a,b)=>a[0]-b[0]));

// sort based on keys .
const keySort = new Map([...familyDetails].sort((a,b)=>String(a[0]).localeCompare(b[0])));
console.log(keySort);

const descKey = new Map([...familyDetails.entries()].sort(describe('first', () => { second })));
console.log(descKey);


// sort based on values.
const valueSort = new Map([...familyDetails].sort((a,b)=>String(a[1]).localeCompare(b[1])));
console.log(valueSort); 