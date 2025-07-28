// Write a js program to generate a random number and store it in a variable. the program then takes an input from thr user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - (no of guesses) is the score of the user the program is expected to terminate once the number is guessed. Number should be between 1- 10
// Step 1: Generate a random number between 1 and 10
let n = Math.floor(Math.random() * 10) + 1;

// Step 2: Initialize guess counter
let guessCount = 0;

// Step 3: Start an infinite loop to keep asking until guessed
while (true) {
  // Step 4.1: Take user input
  let userGuess = prompt("Guess the number (between 1 and 10):");

  // Step 4.2: Convert input to number
  userGuess = Number.parseInt(userGuess);

  // Step 4.3: Increment guess counter
  guessCount++;

  // Step 4.4: Compare the guess with the actual number
  if (userGuess === n) {
    alert("🎉 Congratulations! You guessed it right.");
    break; // Exit the loop
  } else if (userGuess > n) {
    alert("❌ Too high! Try a smaller number.");
  } else {
    alert("❌ Too low! Try a bigger number.");
  }
}

// Step 5: Calculate and display score
let score = 100 - guessCount;
alert(`✅ You guessed the number in ${guessCount} attempt(s). Your final score is: ${score}`);
