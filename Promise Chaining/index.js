// let p1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
// console.log("Resolved after 5 seconds")
// resolve(56)
//     },5000) 
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2=new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Promise 2")
//         }, 2000)
    
//     })
//     return p2
// }).then((value)=>{
//     conole.log("we are done")
// })

// Attaching handlers
let p1=new Promise ((resolve, reject)=> {
    setTimeout(()=>{
// alert("Hey i am not resolved")     
        resolve(1);
    },2000)
})
p1.then(()=>{
    console.log("Congratulations this promise is now resolved")
})
p1.then(()=>{
    console.log("Hurray")
})