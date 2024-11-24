// timer function

//Do not forget to change the seconds as 60!
let count = 10;
  // printed timer to the playground with this attribute.
  document.getElementById("secondsLeft").innerText = count;
 
const timer = setInterval(() => {
  count--;
  // need to update again.
  document.getElementById("secondsLeft").innerText = count;
  // This line prints the count to the console!
  console.log(count);
  
  if (count === 0) {
    clearInterval(timer);
    
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach((button) => {
      button.disabled = true;

      console.log("Time's up! Your score: "); 
  });
  
}
}, 1000);

//score function

let score = -1 ;
for(let i = 0; i < 50; i++) {

}
function addOn(){
  score++;
  document.getElementById("showScore").innerText = score
};
console.log(score);
addOn();

//function for wrong button
function subtractFrom() {
  if (score > 0){
    score--;
  }
  document.getElementById("showScore").innerText = score
};
console.log(score);
subtractFrom();


//cards are below! (will be replaced with JSON later!!!)
let cards =[ {
  word: "Watt",
  forbiddenWords: ["joule", "unit", "power","electric", "potential"]
},
 {
    word: "Telescope",
    forbiddenWords: ["star", "observatory", "planet", "look", "astronomy"]
  },
   {
    word: "Magma",
    forbiddenWords: ["volcano", "fiery", "liquid", "rock", "lava"]
  }
]
// showing the card on the screen
let currentCardIndex = 0;

function showCard(cardsIndex){
  const card = cards[cardsIndex];
  const wordElement = document.getElementById("mainWord");
  const forbiddenWordsElement = document.getElementById("forbiddenWords");
//update main word
  wordElement.innerText = card.word;
//clean the forbidden words list
  forbiddenWordsElement.innerHTML ="";
//adds new words to the forbidden words list
 card.forbiddenWords.forEach((word) => {
  const li = document.createElement("li");
  li.innerText = word;
  forbiddenWordsElement.appendChild(li);

 });

}
showCard(0);

// function for the buttons for a new card.
function getNewCard(){
  currentCardIndex++;
  if(currentCardIndex >= cards.length){
    currentCardIndex = 0;
  }
  showCard();
}
