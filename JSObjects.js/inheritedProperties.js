// inherited properties in JS:
// if any properties of an object are inherited from the objects prototype, that is the inherited prototype.
// Property Attributes Data properties in JavaScript have four attributes.

// value: The property’s value.
// writable: When true, the property’s value can be changed
// enumerable: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
// configurable: If false, attempts to delete the property, change the property to be an access-or property, or change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.


// hasOwnProperty code in JS.
const obj1 = new Object();
obj1.prop1 = 45;

console.log(obj1.hasOwnProperty("prop1"));  // this must give true.
