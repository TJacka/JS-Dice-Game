// Create variables for the game state
let player1Score = 0
let player2Score = 0
var turn = (Math.floor(Math.random() * 2));

function playerTurn() {   
    
    if (turn) {
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = `Player 2 Turn`
        return 2;
    } else {
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        message.textContent = `Player 1 Turn`
        return 1;
    }
} 

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

message.textContent = `Player ${playerTurn()} Turn`;

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    doubleBtn.style.display = "none"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if (!turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else if (turn) {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    turn = !turn
})

doubleBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const doubleOrNothing = Math.floor(Math.random() * 2);

    if (!turn) {
        player1Score += doubleOrNothing * (randomNumber * 2)
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = doubleOrNothing * (randomNumber * 2)
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else if (turn) {
        player2Score += doubleOrNothing * (randomNumber * 2)
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = doubleOrNothing * (randomNumber * 2)
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
        player1Dice.classList.remove("active")
        player2Dice.classList.remove("active")
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
        player1Dice.classList.remove("active")
        player2Dice.classList.remove("active")
    }
    turn = !turn
})

resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    if (playerTurn) {
        message.textContent = `Player 1 Turn`
    } else {
        message.textContent = `Player 2 Turn`
    }
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    doubleBtn.style.display = "block"
    if (playerTurn() === 1) {
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
    } else {
        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")
    }
}