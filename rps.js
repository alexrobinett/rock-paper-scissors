
// DECLARE ROUND NUMBER AND KEEP TRACK


// GENERATE COMPUTERS CHOICE

function getComputerChoice(){
    let randomNum =  Math.floor(Math.random() * 4)
    if(randomNum === 1){
        return "rock"
    }else if (randomNum === 2){
        return "paper"
    }else if ( randomNum === 1){
        return "scissors"
    }else return "scissors"
}

// GET USERS CHOICE

let compScore = 0
let playerScore = 0




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



// KEEP TRACK OF SCORE and play rounds

const playerScoreCounter = document.querySelector(".player-score")
const computerScoreCounter = document.querySelector(".computer-score")

function keepScore(playerSelection,computerSelection){

    if (playARound(playerSelection , computerSelection) === "Winner"){
        console.log("You won a round!")
        playerScore++
        document.getElementById('player-score').innerHTML = playerScore;
    }else if (playARound(playerSelection , computerSelection) === "Looser"){
        console.log("you lost a round")
        compScore++
        document.getElementById('computer-score').innerHTML = compScore;
    }else if (playARound(playerSelection , computerSelection) === "Tied"){
        console.log("you tied this round")
    }else console.log('error winner not met')
}



function CheckForWinner(playerScore,compScore){
    if (playerScore === 5){
        document.getElementById('win-lose').innerHTML = `You Won!`
        return "winner"
    }else if (compScore === 5){
        document.getElementById('win-lose').innerHTML = `You Lost!`
        return "winner"
    }else return
}


    
    
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = button.id
        let computerSelection = getComputerChoice()
        keepScore(playerSelection,computerSelection)
        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${compScore}`)
        
        if (CheckForWinner(playerScore,compScore)=== "winner"){
            playerScore = 0
            compScore = 0
            document.getElementById('computer-score').innerHTML = compScore;
            document.getElementById('player-score').innerHTML = playerScore;
        }
        
        if (playerScore == 1 || compScore == 1){
            document.getElementById('win-lose').innerHTML = ``
        }

    })
})


