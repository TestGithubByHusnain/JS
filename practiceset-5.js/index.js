// Craete an array of numbers and take input from the user to add numbers to this array
// let numbers=[1,2,3,4,5,6]
// let a= prompt("Enter a number")
// a =Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Keep adding numbers to the array in question 1 until 0 is added tp the array.
// let numbers=[1,2,3,4,5,6]
// let a;
// do{
// a= prompt("Enter a number")
// a =Number.parseInt(a)
// arr.push(a)
// }while (a != 0)
// console.log(arr)

// Filter for numbers divisible bt to from a given array
// let arr = [1,34,60,90,10]
// let n = arr.filter((x)=>{
//     return x%10 == 0
// })
// console.log(n)

// Create an array of square of given number
// let arr=[34,56,78,90]
// let n= arr.map((x)=>{
//     return x*x
// })
// console.log(n)

// USe reduce to calculate factorial of a given number from an array of first n natural numbers (n begin the number whose factorial needs to be calculated)
let arr=[1,2,3,4]
let n= arr.reduce((x1, x2)=>{
return x1 * x2
})
console.log(n)