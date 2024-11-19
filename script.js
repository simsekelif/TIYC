// timer function

//Do not forget to change the seconds as 60!
let count = 5;
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
  });
  console.log("Time's up! Your score: "); 
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


//cards are below!
let cards =[ 
  firstCard = {
  word: "Watt",
  forbiddenWords: ["joule", "unit", "power","electric", "potential"]
},
  secondCard = {
    word: "Telescope",
    forbiddenWords: ["star", "observatory", "planet", "look", "astronomy"]
  },
  thirdCard = {
    word: "Magma",
    forbiddenWords: ["volcano", "fiery", "liquid", "rock", "lava"]
  }
]
// function for the buttons.
const getCard = (() => {
  let index = 0; 

  return () => {
      if (index < cards.length) {
          return cards[index++];
      }
  };
});
