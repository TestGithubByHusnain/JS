// What will the following print in js 
// console.log("har\"n"")
let str = 'har\"';
console.log(str.length); 

// Explore the includes, starts with & ends with functions of a string
let message = "Welcome to JavaScript!";

console.log(message.includes("Java"));      // true
console.log(message.startsWith("Welcome")); // true
console.log(message.endsWith("!"));         // true

// Write a program to convert a given string to lowercase
let str1 = 'har\"';
console.log(str1.toLowerCase());

// Extract the amount out of this string
// "Please give Rs 1000"
let str2="Please give Rs 1000"
let amount= str2.slice(15)
console.log(amount)

// Try to change 4 character of a given string were you able to do it?
let str3="Please"
// it can't chaged becuase string is immutable


