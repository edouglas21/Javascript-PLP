// hello so today we will be going over data types and naming conventions and more! 

// javascript conventionally uses camelCase 
// here are some examples!

// NAMES
firstName = "Emily";
lastName = "Douglas";

// adopted from W3 Schools -- https://www.w3schools.com/js/js_conventions.asp
price = 19.90;
tax = 0.20;
fullPrice = price + (price * tax);

// Always use 2 spaces for indentation of code blocks:
// and end a simple statement with a semi colon
// also found on W3 schools 
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// object rules 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  // could also do 
  const personex2 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// In javascript , we can add a number and a number but if we try to add a 
//number and a string then, as addition is not possible, 'concatenation' takes place.//

// Number (int and float)
let age = 25; // integer
let price = 19.99; // floating-point

// String
let name = "Emily Douglas";

// Boolean
let isStudent = true;

// Arrays
let scores = [90, 85, 88]; // Array of numbers (ints)
let mixedArray = [23, "hello", true]; // Array of mixed types

// Operations
let sum = age + price; // Adding int and float
console.log(sum); // Outputs 44.99 (widening conversion to float)

let greeting = "Hello, " + name; // String concatenation
console.log(greeting); // Outputs "Hello, John Doe"

// Type Coercion
let x = "5" + 6; // Number is converted to string and concatenated
console.log(x); // Outputs "56"

// Type Conversion
let strAge = "30";
let numAge = Number(strAge); // Explicit conversion from string to number
console.log(numAge + 10); // Outputs 40

// Objects and Arrays
person.isStudent = isStudent; // Adding a new property to the object
console.log(person);

scores.push(95); // Adding an element to the array
console.log(scores);



