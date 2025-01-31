// Countdown Timer & Age Calculation for Homepage

const birthday = new Date("2003-02-01T00:00:00"); // Boyfriend's birthday
const countdownElement = document.getElementById("countdown");
const ageElement = document.getElementById("age");

// Function to calculate and update countdown timer
function updateCountdown() {
  const now = new Date();
  const timeDiff = birthday - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeDiff < 0) {
    countdownElement.innerHTML = "Happy Birthday!";
  }
}

// Calculate and display the current age
const today = new Date();
const birthYear = birthday.getFullYear();
let age = today.getFullYear() - birthYear;

if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
  age--; // If birthday hasn't occurred yet this year
}

ageElement.innerHTML = age;

// Update the countdown every second
setInterval(updateCountdown, 1000);
