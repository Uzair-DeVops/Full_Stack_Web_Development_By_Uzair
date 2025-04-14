"use strict";
let Userguess = document.querySelector("#number"); // user guess
let Attempt = document.querySelector("#attemp"); // number of attempts
let Message = document.querySelector(".message"); // message to display
let Highscore = document.querySelector("#score"); // high score
let Reset = document.querySelector(".reset"); // reset game
let CheckButton = document.querySelector(".check");
; // check button
let QuestionMark = document.querySelector(".win"); // question mark
// Values
// ✅ NEW BLOCK: Load high score on page load
const savedScore = localStorage.getItem("highscore");
if (savedScore !== null) {
    Highscore.innerText = savedScore;
}
// generate a randow number btw 1 to 10
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(`Random number: ${randomNumber}`);
// user guess func
Userguess.addEventListener("click", () => {
    Message.innerHTML = "Thinking...";
});
// checking user guess
CheckButton.addEventListener("click", () => {
    let AttemptsValue = Number(Attempt.innerText); // number of attempts
    let userValue = Number(Userguess.value);
    if (isNaN(userValue) || userValue < 1 || userValue > 20) {
        Message.innerHTML = "Please enter a valid number between 1 and 20.";
        return; // Exit if input is invalid
    }
    if (userValue < randomNumber) {
        Message.innerHTML = "Too low";
        AttemptsValue--; // Decrease attempts
        if (AttemptsValue <= 0) {
            alert(`Game Over! The random number was ${randomNumber}`);
            window.location.reload(); // Reload the page when "OK" is clicked
            return;
        }
        Attempt.innerText = String(AttemptsValue); // Update attempts
    }
    else if (userValue > randomNumber) {
        Message.innerHTML = "Too high";
        AttemptsValue--; // Decrease attempts
        if (AttemptsValue <= 0) {
            alert(`Game Over! The random number was ${randomNumber}`);
            window.location.reload(); // Reload the page when "OK" is clicked
            return;
        }
        Attempt.innerText = String(AttemptsValue); // Update attempts
    }
    else if (userValue === randomNumber) {
        Message.innerHTML = "Correct! You win!";
        QuestionMark.innerHTML = randomNumber.toString();
        QuestionMark.style.paddingBottom = "30px";
        if (AttemptsValue > Number(Highscore.innerText)) {
            {
                Highscore.innerText = AttemptsValue.toString(); // set high score to number of attempts
                localStorage.setItem("highscore", AttemptsValue.toString()); // store permanently
                Message.innerHTML = "New high score!";
            }
        }
    }
});
// Additional functionality: Trigger the CheckButton click when "Enter" is pressed
Userguess.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        CheckButton.click();
    }
});
window.onload = function () {
    Userguess.value = ""; // clear input field on page load
};
// reset
Reset.addEventListener("click", () => {
    window.location.reload(); // Reload the page when "OK" is clicked
});
