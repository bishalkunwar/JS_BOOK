// // JavaScript String Object is a sequence of character. String contains zero or more character within single or double quotes.

// // Let's create a variable and assaign a String Value.
// const str1 = "This is me Bishal";
// console.log(` String1 : ${str1}`);

// // Creating a String using String() Constructor.
// const str2 = String("This is Shreejan");
// console.log(`String 2: ${str2}`);


const str1 = " \'Bishal\' Is learning something core";
const str2 = " \"Bishal\" dont know JS in Core";
const str3 = "\\Bishal\\ is learning";

console.log(str1);
console.log(str2);
console.log(str3);

function comapreString(){
    let str1 = "Bishal";
    let str2 = "Bishal";

    console.log(str1 == str2);
    console.log(str1.localeCompare(str2));
}

comapreString();