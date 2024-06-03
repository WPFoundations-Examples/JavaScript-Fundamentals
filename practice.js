
/////////////////////
// Conditional Statements
/////////////////////

// Set balance and price of item
let balance = 500;
let itemPrice = 100;

// Check if there are enough funds to purchase item
if (itemPrice <= balance) {
    console.log('You have enough money to purchase the item!');
} else {
    console.log('You do not have enough money in your account to purchase this item.');
}

// or (using the ternary operator)

// const message =
//   itemPrice <= balance
//     ? 'You have enough money to purchase the item!'
//     : 'You do not have enough money in your account to purchase this item.';
// console.log(message);

let userAge = 25;

if (userAge >= 18 && userAge < 30) {
    console.log("Welcome You're eligible for our special offer.");
} else if (userAge >= 30 && userAge < 40) {
    console.log('Hello Enjoy exploring our products.');
} else {
    console.log('Welcome We hope you enjoy browsing our site.');
}


/////////////////////
// Iteration
/////////////////////

// For Loop:

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// or (using a Do While Loop)

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// or (using a While Loop)

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }


/////////////////////
// Functions
/////////////////////

function add(a, b) {
    return a + b;
}

// or (using a Function Expression)

// let add = function add(a, b) {
//     return a + b;
// };

// or (using an Arrow Function)

// let add = (a, b) => a + b;

console.log(add(2,3));

// Unknown Number of Parameters

function sum() {
    const count = arguments.length;
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += arguments[i];
    }
    return total;
}

// or (Using Rest Parameters)

// function sum(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4)); // 10

// Default Parameters

function updateScore(currentScore, value, bonus = 1) {
    return currentScore + value * bonus;
}

console.log(updateScore(10, 3)); // 13
console.log(updateScore(10, 3)); // 13
console.log(updateScore(10, 3, 2)); // 16

// Invoking Functions using ()

let f = function() {
    console.log('f was invoked');
};

let f2 = f;
f(); // invokes the function
f2(); // also invokes the function
