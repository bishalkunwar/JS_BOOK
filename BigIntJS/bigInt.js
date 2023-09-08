// BigInt is a built in object in JS that provides a way to represent whole number larger than 2^53 - 1.
// It is represented by MAX_SAFE_INTEGER.

// Syntax: BigInt(number) or simply appending n to the end of integer literal.


// Parameter in decimal format:
let bigNum = BigInt("1234451653131316165165132015646543654654654654894613321321321364654654654651323135446231313516466312132104544561235478965412300123456789987654321001234567899876543210124567895455555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222");
console.log(bigNum);

// // Parameter in hexadecimal format:
// let bigHex = BigInt(0xa2e);
// console.log(bigHex);

// Comparing BigInt other types:
// A BigInt is similar to a Number in some ways, however it cannot be used with methods of the builtin math object and cannot be mixed with instance sof number in operation.

// Sorting:
// Array consisting both int and BigInt.
let arr = [4,2, 5n, 3n];
arr.sort();
console.log(arr);


// // Recommended Bigint use case.
// Coercion: Coercing between Number and BigInt can lead to loss of precision, it is recommended to only use BigInt when values greater than 253 are reasonably expected and not to coerce between the two types.
// Cryptography: The operations supported on BigInt are not constant time. BigInt is therefore unsuitable for use in cryptography.