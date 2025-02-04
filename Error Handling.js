let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + c); //error
// the code under this line will not execute

// Now we will ctach the error:

try {
    console.log("a+b = ", a + c);
} catch (err) {
    console.log(err);
}

console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);

