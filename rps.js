
// DECLARE ROUND NUMBER AND KEEP TRACK
let promptMessage = 'choose your weapon! Rock, Paper, or Scissors?'

// GENERATE COMPUTERS CHOICE

function getComputerChoice(){
    let randomNum =  Math.floor(Math.random() * 4)
    if(randomNum === 1){
        return "rock"
    }else if (randomNum === 3){
        return "paper"
    }else if ( randomNum === 1){
        return "scissors"
    }else return "scissors"
}



// GET USERS CHOICE



const computerSelection = getComputerChoice()

// COMPARE CHOICES
function playARound(playerSelection , computerSelection){
    let player = playerSelection.toLowerCase()
   
    if (player == computerSelection){
        return "Tied"
    } else if (player === "rock" && computerSelection === "paper" || player === "scissors" && computerSelection === "rock" || player=== "paper" && computerSelection=== "scissors" ){
        return "Looser"
    } else if (player === "rock" && computerSelection === "scissors" || player === "scissors" && computerSelection === "paper" || player === "paper" && computerSelection === "rock" ){
        return "Winner"
    } else console.log("Tied")
}



// KEEP TRACK OF SCORE Nad play rounds

function Game(){
    let compScore = 0
    let playerScore = 0

    for(let i = 0; i <= 5; i++){
        let playerSelection =   prompt(promptMessage)
        let computerSelection = getComputerChoice()

        if (playARound(playerSelection , computerSelection) === "Winner"){
            console.log("You won a round!")
            playerScore++
        }else if (playARound(playerSelection , computerSelection) === "Looser"){
            console.log("you lost a round")
            compScore++
        }else if (playARound(playerSelection , computerSelection) === "Tied"){
            console.log("you tied this round")
        }else console.log('error winner not met')

    }
    
    if (playerScore > compScore){
        alert("your the winner")
    }else if (playerScore < compScore){
        alert("you loose!")
    }
}