document.addEventListener("DOMContentLoaded", () => {
    const incrementBtn = document.querySelector(".interactive");
    const numberDisplay = document.getElementById("number");
    const messageDisplay = document.getElementById("message");
    let currentNumber = 0;

    incrementBtn.addEventListener("click", () => {
        currentNumber++;
        numberDisplay.textContent = currentNumber;
        if (currentNumber === 10) {
            messageDisplay.textContent = "Ok... that might be enough now";
        } else if (currentNumber === 20) {
            messageDisplay.textContent = "stop...";
        } else if (currentNumber === 30) {
            messageDisplay.textContent = "STOP!";
        } else if (currentNumber === 40) {
            messageDisplay.textContent = "I will take away your permission if you don't stop...";
        } else if (currentNumber === 50) {
            messageDisplay.textContent = "No more for you";
            incrementBtn.textContent = "Dead";
            incrementBtn.style.padding = "28px 20px";
            incrementBtn.disabled = true;
        }
    });
});