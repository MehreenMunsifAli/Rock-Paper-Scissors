let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3); // floor to roundoff // 3 to gen from 0 to 2
  console.log(options[randIdx]);
  return options[randIdx];
};

const gameDraw = () => {
  msg.innerText = "Game was a Draw! Play again";
  msg.style.backgroundColor = "#081b31";
  msg.style.color = "white";
  // msg.style.width = "400px";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "forestgreen";
    // msg.style.width = "400px";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Computer wins! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "brown";
    // msg.style.width = "400px";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
