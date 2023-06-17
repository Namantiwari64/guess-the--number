"use strict";
const displayMessage = text =>
  (document.querySelector(".message").textContent = text);
const updateScore = score =>
  (document.querySelector(".score").textContent = score);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (secretNumber === guess) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // If guess is wrong
  else {
    score--;
    updateScore(score);
    if (score > 0) {
      guess < secretNumber
        ? displayMessage("📉 Too Low!")
        : displayMessage("📈 Too High!");
    } else {
      displayMessage("💥 You lost the game!");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").disabled = false;
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  updateScore(score);
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
