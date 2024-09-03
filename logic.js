let humanScore=0;
let computerScore=0;
getComputerChoice=()=>{
    let random_number=Math.random();
     if(random_number<=0.333333333){
        return "ROCK";
     }
     else if(random_number>0.66666666){
        return "PAPER";
     }
     else{
        return "SCISSOR";
     }
};
// console.log(getComputerChoice());

getHumanChoice=()=>{
    let human_input=prompt("Enter your choice: | ROCK | PAPER | SCISSOR |")
    human_input=human_input.toUpperCase();
    if(human_input!="ROCK" && human_input!="PAPER" && human_input!="SCISSOR"){
        prompt("You entered the wrong input , please re enter your choice");
        playRound();
    }
    else{
        return human_input
    }
}

playRound=(humanChoice=getHumanChoice(),computerChoice=getComputerChoice())=>{
    if(humanChoice===computerChoice){
        prompt(`ITS A TIE! You: ${humanScore} vs Computer: ${computerScore} \nGo again? Ok or Cancel`)
        playRound()
    }
    else if(humanChoice.length>computerChoice.length || humanChoice=="ROCK" && computerChoice=="SCISSOR"){
        humanScore+=1;
        prompt(`YOU WIN! You: ${humanChoice} beats ${computerChoice}\n${humanScore} vs Computer: ${computerScore} \nGo again? Ok or Cancel`)
            playRound()
        
    }
    else if(humanChoice.length<computerChoice.length || computerChoice=="ROCK" && humanChoice=="SCISSOR"){
        computerScore+=1;
        prompt(`YOU LOSE! You: ${computerChoice} beats ${humanChoice}\n${humanScore} vs Computer: ${computerScore} \nGo again? Ok or Cancel`)
            playRound()
        
    }
}
playRound();
