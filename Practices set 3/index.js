// Write a program to print the marks of a student in an object using for loop
obj={ husnain:98, hunain:74, butt:69 }

let obj = { husnain: 98, hunain: 74, butt: 69 };
for (let i=0; i<(Object.keys(marks).length); i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
} 

// Write the program in q1 using for in loop
 let obj2 = { husnain: 98, hunain: 74, butt: 69 };
 for (let key in marks ){
console.log("The marks of " + key + " are " + marks[i])
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
 } 


// Write a program to print "try again" until the user enters the correct number
let correctnumber=4
let i 
while(i != correctnumber){
console.log("Try again")
i=prompt("Enter a number")
}
console.log("You have entered a correct number")

// Write a function to find mean of 5 numbers
const mean =(a,b,c,d) =>{
return(a+b+c+d)/2
}
console.log(mean(4,5,6,7))