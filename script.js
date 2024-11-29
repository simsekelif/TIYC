// import JSON from './cards.json' with { type: "json" };

// timer function
//Do not forget to change the seconds as 60!
let count = 10;

// printed timer to the playground with this attribute.
document.getElementById("secondsLeft").innerText = count;

const timer = setInterval(() => {
  count--;
  // need to update again.
  document.getElementById("secondsLeft").innerText = count;

  if (count === 0) {
    clearInterval(timer);
    document.getElementById("times_up").innerText = "💣 Time's Up!";
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}, 1000);

// score function

let score = 0;

function addOn() {
  score++;
  updateScore();
}

// function for wrong button
function subtractFrom() {
  if (score > 0) {
    score--;
  }
  updateScore();
}

// update function for adding and substracting from the score
function updateScore() {
  const scoreElement = document.getElementById("showScore");
  if (scoreElement) {
    scoreElement.innerText = score;
  } else {
    console.error("There is something wrong!");
  }
}

// event listeners for the buttons
document.getElementById("nextButton").addEventListener("click", () => {
  addOn();
  getNewCard();
});
document.getElementById("wrongButton").addEventListener("click", () => {
  subtractFrom();
  getNewCard();
});
document.getElementById("passButton").addEventListener("click", getNewCard);

// cards are below! hardcoded version has been updayed with JSON
let cards = [];
let currentCardIndex = 0;

fetch("./cards.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    cards = data.cards;
    showCard(currentCardIndex);
  })
  .catch((error) => {
    console.error("error", error);
  });

function showCard(cardsIndex) {
  const card = cards[cardsIndex];
  const wordElement = document.getElementById("mainWord");
  const forbiddenWordsElement = document.getElementById("forbiddenWords");
  //update main word
  wordElement.innerText = card.word;

  //clean the forbidden words list
  forbiddenWordsElement.innerHTML = "";
  //adds new words to the forbidden words list
  card.forbiddenWords.forEach((word) => {
    const li = document.createElement("li");
    li.innerText = word;
    forbiddenWordsElement.appendChild(li);
  });
}
// function for the buttons for a new card.
function getNewCard() {
  currentCardIndex++;
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }
  showCard(currentCardIndex);
}
