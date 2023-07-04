function getComputerChoice(){
    let choice=Math.floor(Math.random() * 3) + 1
    switch(choice){
        case 1:
            return "Rock";
            break
        case 2:
            return "Paper";
            break
        case 3:
            return "Scissors"
            break
        default:
            return "Random is not working correctly"
    }
}
function playRound(playerSelection,computerSelection){
    pSelection=playerSelection.toUpperCase();
    cSelection=computerSelection.toUpperCase();
    switch(true){
        case(pSelection=="ROCK" && cSelection=="PAPER"):
            return "You Lose! Paper beats Rock";
            break
        case(pSelection=="ROCK" && cSelection=="SCISSORS"):
            return "You Win! Rock beats Scissors";
            break
        case(pSelection=="ROCK" && cSelection=="ROCK"):
            return "Its a tie";
            break
        case(pSelection=="PAPER" && cSelection=="ROCK"):
            return "You Win! Paper beats Rock";
            break
        case(pSelection=="PAPER" && cSelection=="SCISSORS"):
            return "You Lose! Scissors beats Paper";
            break
        case(pSelection=="PAPER" && cSelection=="PAPER"):
            return "Its a tie";
            break
        case(pSelection=="SCISSORS" && cSelection=="ROCK"):
            return "You Lose! Rock beats Scissors";
            break
        case(pSelection=="SCISSORS" && cSelection=="PAPER"):
            return "You Win! Scissors beats Paper";
            break
        case(pSelection=="SCISSORS" && cSelection=="SCISSORS"):
            return "Its a tie";
            break
        default:
            return "You misspelled your input, try again!";
            break  
    }


}

function game(){
    for(let i=0;i<5;i++){
        let playerChoice=prompt("Enter Rock Paper or Scissors");
        let computerSelection = getComputerChoice(); 
        console.log(playRound(playerChoice, computerSelection));
    }
}
game();