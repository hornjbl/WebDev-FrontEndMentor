// ========================
// Ex. 01
// ========================

function sum(a, b) {
    return a + b;
}

console.log("Normal sum(2, 4) function:");
console.log(sum(2, 4));

// Is the equivalent of the arow function below:
let sumResult1 = (a, b) => {
    return a + b;
};

console.log("Arrow func sumResult1(3, 3):");
console.log(sumResult1(3, 3));

// And is also the equivalent of the simplified arrow function below:
let sumResult2 = (a, b) => a + b;

console.log("Arrow func sumResult2(4, 3):");
console.log(sumResult2(4, 3));

// ==============
// Ex. 02
// ==============

function isPositive(number) {
    return number > 0;
}

console.log("Normal isPositive(-6) function:");
console.log(isPositive(-6));

// Is the same as the arrow func:
let positiveResult1 = (number) => {
    return number > 0;
};

console.log("Arrow func positiveResult1(8):");
console.log(positiveResult1(8));

// Is the same as the simplified arrow func:
let positiveResult2 = (number) => number > 0;

console.log("Arrow func positiveResult2(8):");
console.log(positiveResult2(8));

console.log("Arrow func positiveResult2(-8):");
console.log(positiveResult2(-8));

// ==============
// Ex. 03
// ==============

function randomNumber1To10() {
    return Math.ceil(Math.random() * 10);
}

console.log("Normal randomNumber1To10() function:");
console.log(randomNumber1To10());

// Is the same as the arrow func:

// document.addEventListener("click", randomNumber1To10);

document.addEventListener("click", () => {
    console.log("Clickety click click...");
});

// document.addEventLinstener('click', function() => {
// 	console.log('Click');
// })
