let choiceArray = ["Rock","Paper", "Scissors"];
let computerScore=0, playerScore=0;
function getComputerChoice() {
    return Math.floor(Math.random() * choiceArray.length);
}
let playerSelection;
let computerSelection;


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    
    if(playerSelection === computerSelection) {
        console.log("It's a draw");
    } else if((playerSelection+1) % 3 === computerSelection){
        console.log(`${choiceArray[computerSelection]} beats ${choiceArray[playerSelection]}`);
        computerScore++;
    } else {
        console.log(`${choiceArray[playerSelection]} beats ${choiceArray[computerSelection]}`);
        playerScore++;
    }

}

function game() {
    for (let i = 0; i < 20; i++) {
        playerSelection = prompt("Choose your option: Rock(0), Paper(1), Scissors(2) ");
        while (playerSelection<0 || playerSelection<2) {
            playerSelection = prompt("Choose your option: Rock(0), Paper(1), Scissors(2) ");
        }
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

