// // In JS , Set is the es6 feature that collects item that are unique, which means elements cannot be repeated,
// // Set in ES6 are ordered: elements of the set can be iterated in the insertion order, set can store any type of value.

// let set1 = new Set(["Bishal", "Shreejan", "Nishant", "Alishan"]);

// let set2 = new Set("Foooooods");

// let set3 = new Set([10, 20, 20, 30, 40, 40]);

// let set4 = new Set();

// console.log(set3.size);

// set4.add("hello world");
// console.log(set4);


// set4.add(40).add(30).add(40);
// console.log(set4);
// console.log(set4.size);


// // delete function in set.
// console.log(set2.delete("d"));


// Set.entries()
let setTry = new Set();

setTry.add(20).add(10).add(30).add(40).add(50);

// using entries to get iterator:
let getEntriesArray = setTry.entries();
console.log(getEntriesArray);

// each iterator is array of [value, value]
console.log(getEntriesArray.next().value);
console.log(getEntriesArray.next().value);
console.log(getEntriesArray.next().value);


// set .has() it returns true if the specified value is present in the set object:
console.log(setTry.has(70));
console.log(setTry.has(20));

let values = setTry.values();
console.log(values);