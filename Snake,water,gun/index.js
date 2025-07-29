// Craete Snake, Water & gun game in js. The game should ask you to enter S, W, G and declare win or loss using alert.
// Use alert, prompt and confirm whereever required!
let user = prompt("Enter S (Stone), W (Water), or G (Gun)").toUpperCase();  // convert input to uppercase
let cpu = Math.floor(Math.random() * 3);
let cpu2 = ["S", "W", "G"][cpu];

const match = (cpu2, user) => {
  if (cpu2 === user) {
    return "It's a draw!";
  } 
  else if (
    (cpu2 === "S" && user === "W") ||
    (cpu2 === "W" && user === "G") ||
    (cpu2 === "G" && user === "S")
  ) {
    return "Computer wins!";
  } 
  else {
    return "You win!";
  }
}

let result = match(cpu2, user);
alert(`Computer chose: ${cpu2}\nYou chose: ${user}\nResult: ${result}`);

