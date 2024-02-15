const countdownContainer = document.getElementById("countdown-container");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Set the countdown target date and time
const targetDate = new Date("2023-12-31T23:59:59Z");

// Update the countdown every second
setInterval(() => {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference between the target date and the current date
    const difference = targetDate - currentDate;

    // Calculate the remaining days, hours, minutes, and seconds
    const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the remaining time
    days.textContent = remainingDays.toString().padStart(2, "0");
    hours.textContent = remainingHours.toString().padStart(2, "0");
    minutes.textContent = remainingMinutes.toString().padStart(2, "0");
    seconds.textContent = remainingSeconds.toString().padStart(2, "0");

    // If the target date has passed, display a message
    if (difference < 0) {
        clearInterval(intervalId);
        countdownContainer.textContent = "Happy New Year!";
    }
}, 1000);