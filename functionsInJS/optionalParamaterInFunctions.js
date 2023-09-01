
let tryMethod = (a,b=30)=>{
    a = a || 20;

    return a+b;
}

console.log(tryMethod(3,4));
console.log(tryMethod(23));