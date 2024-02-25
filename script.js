// Initialize counters with the stored values or default to 0
let headsCounter = parseInt(localStorage.getItem('headsCounter')) || 0;
let tailsCounter = parseInt(localStorage.getItem('tailsCounter')) || 0;

// Update the counter elements with initial values
document.getElementById("counterHeads").innerText = `Heads Button Clicked: ${headsCounter}`;
document.getElementById("counterTails").innerText = `Tails Button Clicked: ${tailsCounter}`;

document.getElementById("headsBtn").addEventListener("click", function() {
    flipCoin("Heads");
    updateCounter("heads");
});

document.getElementById("tailsBtn").addEventListener("click", function() {
    flipCoin("Tails");
    updateCounter("tails");
});

function flipCoin(userChoice) {
    // Randomly generate Heads or Tails
    const randomNumber = Math.random();
    let result;
    if (randomNumber < 0.5) {
        result = "Heads";
    } else {
        result = "Tails";
    }

    // Display the result
    document.getElementById("result").innerText = `You chose ${userChoice}. The result is ${result}.`;
    if (userChoice === result) {
        document.getElementById("result").innerText += " Congratulations! You win!";
    } else {
        document.getElementById("result").innerText += " Sorry! You lose!";
    }
}

function updateCounter(choice) {
    if (choice === "heads") {
        headsCounter++;
        document.getElementById("counterHeads").innerText = `Heads Button Clicked: ${headsCounter}`;
        localStorage.setItem('headsCounter', headsCounter);
    } else if (choice === "tails") {
        tailsCounter++;
        document.getElementById("counterTails").innerText = `Tails Button Clicked: ${tailsCounter}`;
        localStorage.setItem('tailsCounter', tailsCounter);
    }
}
