
// JS Data Type Review: 

let x = 5;               // Number
let y = "Hello";         // String
let isActive = true;     // Boolean
let z;                   // Undefined
let id = Symbol("id");   // Symbol
let person = { name: "Alice", age: 25 }; // Object
let numbers = [1, 2, 3]; // Array


// a one-condition if/else statement (i.e. "if x == true")
let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella.");
} else {
    console.log("No need for an umbrella.");
}


// a multi-condition if/else statement (i.e. "if x>0 && y< 10)
let a = 5;
let b = 8;

if (a > 0 && b < 10) {
    console.log("a is positive and b is less than 10.");
} else {
    console.log("Either a is not positive or b is not less than 10.");
}


// if/elif/else statements
let score = 85;

if (score >= 90) {
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else if (score >= 70) {
    console.log("You got a C.");
} else {
    console.log("You need to work harder!!!");
}


// short-circuit logic

let isLoggedIn = false;
let userName = "Emily";

if (isLoggedIn && userName === "Emily") {
    console.log("Welcome, Emily!");
} else {
    console.log("Please log in.");
}

// more short circuit logic 

let preferredColor = null;
let defaultColor = "blue";
let userColor = preferredColor || defaultColor;

console.log(userColor); // Output: "blue"


// now a switch case scenario 

let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}
