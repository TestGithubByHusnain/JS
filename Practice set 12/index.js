// write a js program to point the following after 2 seconf delay 
// Hello 
// World 

const a = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    });
};

(async () => {
    console.log(await a("Hello"));  // prints after 2 seconds
    console.log(await a("World"));  // prints after 4 seconds (2 more seconds)
})();

// Write a js program to find average of numbers in an array using spread operator?
function findAverage(...numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  return average;
}

// Example usage:
const nums = [10, 20, 30, 40, 50];
const avg = findAverage(...nums); // Spread operator used here

console.log(`Average is: ${avg}`);

// write a js function which resolves a promise after n seconds.
//  the function takes n as the paremeter. use an iife to execute the functions with different values of n?

// Function that returns a promise resolved after n seconds
function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${n} seconds`);
    }, n * 1000); // convert to milliseconds
  });
}

// IIFE to call the function with different n values
(async () => {
  console.log(await wait(1)); // Resolved after 1 second
  console.log(await wait(2)); // Resolved after 2 seconds
  console.log(await wait(3)); // Resolved after 3 seconds
})();


// Write a simple interest calculator using js
function calculateSimpleInterest(principal, rate, time) {
  const interest = (principal * rate * time) / 100;
  return interest;
}

// Example usage
const principal = 10000; // in currency units
const rate = 5;          // annual interest rate in %
const time = 2;          // in years

const interest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple Interest is: ${interest}`);
