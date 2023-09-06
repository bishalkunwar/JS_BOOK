// JS subSet() method returns true if the set A is subset of set B. A set A is subSet of set B only if all elements of Set A are present in Set B.
Set.prototype.subSet = function(secSet){

    // Remainder: ! if size of this set is greater than the another set, then this cannot be the subset of another set
    if(this.size > secSet.size){
        return false;
    }else{
        for(let elements of this){
            // Remainder !: if any elements in this set is missing in another that is secSet, it must return false:
            if(!secSet.has(elements))
                return false;
        }

        return true;
    }
};


// // Union() method:
// It returns a Set which consists of the union of Set A and Set B. A Set is said to be a union of two sets, if it contains all elements of Set A as well as all elements of Set B, but it doesn’t contain duplicate elements. 
// If an element is present in both Set A and Set B then the union of Set A and B will contain a single copy of the element. Let’s implement and use the union function 
Set.prototype.union = function(secSet){
    
    // Create new set to store union.
    let unionSet = new Set();

    // Iterate over the values and then add the value to union set:
    for(let elem of this){
        unionSet.add(elem);
    };

    // iterate over another set and add values to the union set
    for(let elem of secSet){
        unionSet.add(elem);
    };

    return unionSet;
}


// Intersection() Method:
Set.prototype.intersection = function(otherSet){

    // creating new set to store intersected values:
    let interSet = new Set();

    for(let elem of otherSet){
        if(this.has(elem))
            interSet.add(elem);
    };
    return interSet;
};


// JS Set difference Method:
Set.prototype.difference = function(anotherSet){

    // create new set to store the differences:
    let differenceSet = new Set();

    // iterate over the values:
    for(let elem of this){
        // if value of A is not in value of b, add it to the new set
        if(!anotherSet.has(elem))
            differenceSet.add(elem);
    };

    return differenceSet;
}

// Declaring Different functions:
let setA = new Set([10, 15, 20, 25]);
let setB = new Set([10, 15, 20, 25, 30, 40, 50]);
let setC = new Set([10, 30, 40, 50]);

// // now we can check the boolean condition of subset if it is true or false:
// console.log(setA.subSet(setB));
// console.log(setB.subSet(setC));
// console.log(setB.subSet(setA));

let unionSet = setA.union(setB);
console.log(unionSet.values());

let intersection = setA.intersection(setB);
console.log(intersection);

let differenceSet = setB.difference(setA);
console.log(differenceSet);


