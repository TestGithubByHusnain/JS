// IIFE => Immediately invoked function
// Basic iife
// (function() {
//   console.log("This is an IIFE");
// })();

// IIFE with parameters
// (function(name) {
//   console.log("Hello " + name);
// })("Husnain");

// Arrow function iife 
// (() => {
//   let x = 10;
//   console.log("x is", x);
// })();

// Destructuring
let arr =[3, 5, 8]
let [a, b, ...rest] =arr
console.log(a)
console.log(b)
console.log(rest)

// Object Destructuring 
const person1 = {
  name: "Husnain",
  age: 21,
};

const { name, age } = person1;

console.log(name); // Husnain
console.log(age);  // 22

// Rename variables 
const person2 = { name: "Ali", age: 30 };

const { name: fullName, age: years } = person2;

console.log(fullName); // Ali
console.log(years);    // 30

// Spread Operator in js
// With Array 
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers)
// Output: [1, 2, 3, 4, 5]

// With objects 
const user = { name: "Ali", age: 25 };
const updatedUser = { ...user, age: 26 };
console.log(updatedUser)
// Output: { name: "Ali", age: 26 }






