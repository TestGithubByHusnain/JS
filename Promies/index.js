// console.log("Hello")
// setTimeout(function() {
//     console.log("Hello in 2 seconds")
// }, 2000)
// console.log("My name is " + "john")


// let myPromise = new Promise(function (resolve, reject) {
//   let success = true;

//   if (success) {
//     resolve("✅ Task completed successfully!");
//   } else {
//     reject("❌ Task failed.");
//   }
// });

// myPromise
//   .then(function (result) {
//     console.log("Success:", result);
//   })
//   .catch(function (error) {
//     console.log("Error:", error);
//   });

// .then and .catch 
let p1= new Promise((resolve, reject)=> {
    console.log("Promise is pending")
    setTimeout(() =>{
        // console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
    }, 5000)
})

let p2= new Promise((resolve, reject)=> {
    console.log("Promise is pending")
    setTimeout(() =>{
        // console.log("I am a promise and i am rejected")
   resolve(true)
        // reject(new Error("I am an error"))
    }, 5000)
})

p2.then((value) =>{
    console.log(value)
})
p1.catch((error)=>{
    console.log("some error occured in p2")
})
