
// DECLARE ROUND NUMBER AND KEEP TRACK


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

function playARound(playerSelection , computerSelection){
    let player = playerSelection.toLowerCase()
   
    if (player == computerSelection){
        return "you tied the game"
    } else if (player === "rock" && computerSelection === "paper" || player === "scissors" && computerSelection === "rock" || player=== "paper" && computerSelection=== "scissors" ){
        return "you loose"
    } else if (player === "rock" && computerSelection === "scissors" || player === "scissors" && computerSelection === "paper" || player === "paper" && computerSelection === "rock" ){
        return "you win"
    } else console.log(player)
}

const computerSelection = getComputerChoice()
const playerSelection = "Scissors"

console.log(playARound(playerSelection, computerSelection))


// COMPARE CHOICES



// RETURN WHO WINS



// KEEP TRACK OF SCORE