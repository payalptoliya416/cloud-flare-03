let timeLeft = 5;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  timeLeft--;
  if (timeLeft <= 0) {
    countdownEl.textContent = "0 seconds";
    clearInterval(timer);
  } else {
    countdownEl.textContent = `${timeLeft} seconds`;
  }
}, 1000);