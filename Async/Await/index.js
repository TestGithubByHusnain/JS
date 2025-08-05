// Async/ Await 
// async function getData() {
//   let result = await fetch("https://api.example.com/data");
//   console.log(result);
// }

// Error handling with try catch
// async function fetchUser() {
//   try {
//     const res = await fetch("https://api.example.com/user");
//     const user = await res.json();
//     console.log(user);
//   } catch (err) {
//     console.error("Error fetching user:", err);
//   }
// }

// Real world example
async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("User:", user.name);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

getUserData();


