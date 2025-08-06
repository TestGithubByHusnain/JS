// Question 1: Write a program to load a javascript file in a browser using promises. Use .then() to dispaly an alert
// where the load is complete
// const loadscript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//         resolve(src + "Done Success")
//     };
//     document.head.append(script)
//   });
// };

// const main2=async()=>{
//     console.log(new Date().getMilliseconds())
//     let a=await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.js")
//         console.log(new Date())
//     console.log(a)
// }
// main2()

// Question #3 
// Create a  promise which rejects after 3 seconds use an async/ await to get its value. usea try catch to handle it's error
// let p= ()=>{
// return newPromise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Please this is not acceptable"))
//     }, 3000)
// })
// } 
// let a= async()=>{
//     try{
//   let c=await p()
//     console.log(c)
//     }
//     catch (err){
//  console.log("This error has been handled")
//     }
 
// }

// question # 4:
// Write a program uing promise.all() inside an async to await 3 promises. Compare it's result with the case where we await 
// these promises one by one
// Simulated async tasks
function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1 complete");
            resolve(1);
        }, 2000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 2 complete");
            resolve(2);
        }, 1000);
    });
}

function task3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 3 complete");
            resolve(3);
        }, 3000);
    });
}

async function runWithPromiseAll() {
    console.time("Promise.all time");
    const results = await Promise.all([task1(), task2(), task3()]);
    console.log("Results with Promise.all:", results);
    console.timeEnd("Promise.all time");
}

async function runSequentially() {
    console.time("Sequential time");
    const result1 = await task1();
    const result2 = await task2();
    const result3 = await task3();
    console.log("Results sequentially:", [result1, result2, result3]);
    console.timeEnd("Sequential time");
}

// Run both versions
(async function compare() {
    console.log("=== Running with Promise.all() ===");
    await runWithPromiseAll();

    console.log("\n=== Running Sequentially ===");
    await runSequentially();
})();
