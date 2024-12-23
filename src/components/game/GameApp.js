import React from 'react'
import ResponsiveAppBar from '../navbar/ResponsiveAppBar'

function GameApp() {
    const choices = ['rock','paper','scissor'];
    const [playerChoice,setPlayerChoice]=React.useState("");
    const [computerChoice,setComputerChoice]=React.useState("");
    const [result,setResult]=React.useState("");
    
    const playGame = (playerChoice) => {
        const computer = choices[Math.floor(Math.random() * choices.length)];
        setPlayerChoice(playerChoice);
        setComputerChoice(computer);
        if(playerChoice === computer){
            setResult("IT'S A TIE!!!");
        }else if(
            (playerChoice === "rock" && computer === "paper")||(playerChoice === "paper" && computer === "scissor")||
            (playerChoice === "scissor"&& computer === "rock")
        ){
            setResult("YOU WONN!!");
        }else{
            setResult("YOU LOST!!!!!!!! SORRRYY");
        }
    }   
  return (
   <div> 
      <ResponsiveAppBar/>
      <h1> Rock Paper Scissor </h1>
      { choices.map((choice) => (
        <button key={choice} onClick={() => playGame(choice)}>
            {choice}
        </button>
      ))}
        {playerChoice && 
          <div> 
            <h2>playerChoice:{playerChoice}</h2>
            <h2>computerChoice:{computerChoice}</h2>
            <h2>{result}</h2>
          </div>
        }
    </div>
  )
}

export default GameApp;