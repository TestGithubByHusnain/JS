// Write a javascript program to pretend to look like a hacker. Write an async function which will simply display the following output
// Initializing hack program ....
// Hacking hunain username...
// Username found hunain15...
// Connecting to facebook...
// Try to use HTML & styling if possible

let a = [
  "Initializing Hack tool....",
  "Connecting to facebook....",
  "Connecting to server 1....",
  "Connection failed. Retrying....",
  "Connecting to server 2....",
  "Connected Successfully....",
  "Username iamhusnain",
  "Trying brute force",
  "200k passwords tried....",
  "Match not found",
  "Another 200k passwords tried....",
  "Match not found",
  "Another 200k passwords tried....",
  "Match not found",
  "Another 200k passwords tried....",
  "Match found",
  "Accessing Account",
  "Hack successful"
];
const sleep =async (seconds)=>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(true)}, seconds * 1000)
})
}
const showHack=async(message)=>{
await sleep(2)
// console.log(message)
text.innerHTML = text.innerHTML + message + "</br>"
}
(async () => {
for (let i =0; i<a.length; i++){
    await showHack(a[i])
}
})()