// Array push method adds items to an array to the last index.

let myFriends = ["Alishan", "Shreejan", "Rupak"];
myFriends.push("Nishant");

// console.log(myFriends);

myFriends.unshift("Alishan");
myFriends.unshift("Ram");

// // console.log(myFriends);

// myFriends.pop("Nishant");
// myFriends.pop();
// myFriends.shift();
console.log(myFriends.toString());

// myFriends.splice(start, deleteCout/addCount, items/paramaters).

myFriends.splice(2, 1);
console.log(myFriends.toString());
myFriends.splice(2, 0, "mugi", "lado");
console.log(myFriends.toString());

let slicedFriends = myFriends.slice(1,4);
console.log(slicedFriends);

const reversedFriends = []
for (i = slicedFriends.length-1; i >=0; i-- ){
    const valueAtIndex = slicedFriends[i];
    reversedFriends.push(valueAtIndex);
};
console.log(reversedFriends);
