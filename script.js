// timer function

let count = 60;
const timer = setInterval(() => {
  count--;
  // This line prints the count to the console!
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up! Your score: ");
  }
}, 1000);
