let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll("input")

function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
 }

 function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
 }

 function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        playerScore +=1
        result = ("You win! " + playerSelection + " win from " + computerSelection + 
        "<br><br>Player score: " + playerScore + "<br><br>Computer score: " + computerScore)

        if (playerScore == 5) {
        result += "<br><br>You won the game! Reload the page to try again"
        disableButtons()
        }
 }
 else if (playerSelection == computerSelection) {
    result = ("Its a tie! You both choose " + playerSelection + 
    "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
 }
    else {
        computerScore += 1
        result = ("You lose! " + computerSelection + " win from " + playerSelection + 
        "<br><br>Player score: " + playerScore + "<br><br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += "I won the game! Reload the page to try again"
            disableButtons()
    } 
 }

 document.getElementById("result").innerHTML = result
 return
}

buttons.forEach(button=>{
    button.addEventListener("click", function(){
        playRound(button.value)
    })
})