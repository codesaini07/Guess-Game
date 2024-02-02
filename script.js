// "use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".number").value);

  console.log(number, typeof number);

  // when player input no number
  if (!number) {
    // document.querySelector(".message").textContent = "No Number";
    displayMessage("No Number!");

    //when player wins
  } else if (number === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number";
    displayMessage("Correct Number");
    document.querySelector(".guess").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.width = "25%";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // guess is wrong
  } else if (number !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      displayMessage(number > secretNumber ? "Too High" : "Too Low");
      number > secretNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You Lost the game";
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  // } else if (number > secretNumber) {

  //   //guess is too High
  // } else if (number < secretNumber) {
  //   document.querySelector(".message").textContent = "Too LOW";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // }
});

// when again button is clicked
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").textContent = "?";
  document.querySelector(".number").textContent = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.width = "15%";
});
