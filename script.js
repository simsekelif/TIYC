// Timer function
let count = 60;

// Printed timer to the playground with this attribute.
document.getElementById("secondsLeft").innerText = count;

const timer = setInterval(() => {
  count--;
  // Need to update again.
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

// Score function

let score = 0;

function addOn() {
  score++;
  updateScore();
}

// Function for wrong button
function subtractFrom() {
  if (score > 0) {
    score--;
  }
  updateScore();
}

// Update function for after adding and substracting from the score
function updateScore() {
  const scoreElement = document.getElementById("showScore");
  if (scoreElement) {
    scoreElement.innerText = score;
  } else {
    console.error("There is something wrong!");
  }
}

// Event listeners for the buttons
document.getElementById("correctButton").addEventListener("click", () => {
  addOn();
  getNewCard();
});
document.getElementById("wrongButton").addEventListener("click", () => {
  subtractFrom();
  getNewCard();
});
document.getElementById("passButton").addEventListener("click", getNewCard);

// Cards are below! with JSON
let cards = [];
let currentCardIndex = 0;

fetch("./cards.json")
  .then((response) => response.json())
  .then((data) => {
    cards = data.cards;
    showCard(currentCardIndex);
  })
  .catch((error) => {
    console.error("Sorry, not sorry!", error);
  });

// Function for showing cards
function showCard(cardsIndex) {
  const card = cards[cardsIndex];
  const wordElement = document.getElementById("mainWord");
  const forbiddenWordsElement = document.getElementById("forbiddenWords");

  // Updates main word
  wordElement.innerText = card.word;

  // Cleans the forbidden words list
  forbiddenWordsElement.innerHTML = "";

  // Adds new words to the forbidden words list
  card.forbiddenWords.forEach((word) => {
    const p = document.createElement("p");
    p.innerText = word;
    forbiddenWordsElement.appendChild(p);
  });
}

// Function for the buttons for a new card.
function getNewCard() {
  currentCardIndex++;
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }
  showCard(currentCardIndex);
}
