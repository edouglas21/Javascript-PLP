// Review from PLP 1+2
function greet(name) {
    console.log("Hello, " + name);
  }
  // Calling the function
  greet("Percy"); // Output: Hello, Percy
  

  // Function with return value
  function add(a, b) {
    return a + b;
  }
  let sum = add(5, 3); // sum is now 8
  console.log("Sum: " + sum); // Output: Sum: 8


// Now getting into PLP 3

// function that takes in 2 numbers, multiplies them
function multiply(a, b) {
    return a * b;
  }

  let result = multiply(3, 5); 
  console.log("Product is: " + result); 

// recurseive function 
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Base case: factorial of 0 or 1 is 1
    }
    return n * factorial(n - 1); // Recursive case
  }

  let answer = factorial(5); //(5 * 4 * 3 * 2 * 1)
  console.log("The factorial is: " + answer); 


// takes in a string and splits it into 2 strings
function splitString(str) {
    //middle of string
    let middleIndex = str.length % 2 === 0 ? str.length / 2 : (str.length / 2) + 0.5;

    let firstHalf = str.slice(0, middleIndex);
    let secondHalf = str.slice(middleIndex);

    return { firstHalf, secondHalf };
  }

  let splitStrin = splitString("JavaScript");
  console.log("First half: " + splitStrin.firstHalf); 
  console.log("Second half: " + splitStrin.secondHalf); 
  
  // calling the functions and saving and the fucntion calls in variables 

// function 1: Multiply two numbers
function multiply(a, b) {
    return a * b;
  }
  //call the multiply function and save the result
  let product = multiply(5, 3);
  console.log("Product: " + product); 
  
  // fucnition 2: Add two numbers
  function add(a, b) {
    return a + b;
  }
  // call the add function and save the result
  let total = add(10, 20);
  console.log("Sum: " + total); 

// testing pass-by-reference and pass-by-value 
function modifyPrimitive(x) {
    x = x + 1;  //modifying value
    console.log("Inside function (primitive): " + x);
  }

  function modifyObject(obj) {
    obj.value = obj.value + 1;  // Modify the object property
    console.log("Inside function (object): " + obj.value);
  }
  
  // testing with a primitive type (number)
  let num = 10;
  console.log("Before function call (primitive): " + num);
  modifyPrimitive(num);  // pass-by-value
  console.log("After function call (primitive): " + num);

  
  
  
