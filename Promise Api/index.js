let p1=new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Value 1");
    }, 1000)
})

let p2=new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Value 2");
        // reject(new Error("Error"))
    }, 2000)
})

let p3=new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Value 3");
    }, 3000)
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// Promise all
// let promise_all=Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// Promise.allSettled
//  let promise_all=Promise.allSettled([p1,p2,p3])
//  promise_all.then((value)=>{
//      console.log(value)
//  })

// Promise.race
//  let promise_all=Promise.race([p1,p2,p3])
//  promise_all.then((value)=>{
//      console.log(value)
//  })

// Promise.Any 
//  let promise_all=Promise.any([p1,p2,p3])
//  promise_all.then((value)=>{
//      console.log(value)
//  })

// Promise.Resolve
//  let promise_all=Promise.resolve([p1,p2,p3])
//  promise_all.then((value)=>{
//      console.log(value)
//  })

//  Promise.reject
 let promise_all=Promise.reject([p1,p2,p3])
 promise_all.then((value)=>{
     console.log(value)
 })