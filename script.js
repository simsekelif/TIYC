// timer function

//Do not forget to change the amount!
let count = 5;
const timer = setInterval(() => {
  count--;
  // This line prints the count to the console!
  console.log(count);
  // printed timer to the playground with this attribute.
  document.getElementById("secondsLeft").innerText = count;
  
  if (count === 0) {
    clearInterval(timer);
    document.getElementById("gameButton").disabled = true;
    console.log("Time's up! Your score: ");
  }
}, 1000);


// score function

// let score = 0;
// for(var score = 0; i < 20; i++) {

// }
// function addOn(){
//   score++
// };
// console.log(addOn);


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
