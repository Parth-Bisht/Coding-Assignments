import React from "react";
import Square from "./Square";
import Endgame from './Endgame';

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [grid, setGrid] = React.useState([
    INITIAL,
    INITIAL,
    INITIAL,
    INITIAL,
    INITIAL,
    INITIAL,
    INITIAL,
    INITIAL,
    INITIAL,
  ]);
  const [player, setplayer] = React.useState(false);
  const [gameover, setgameover] = React.useState(false);
  const [draw, setdraw] = React.useState(false);
  const [wincount,setwincount] = React.useState({
      X:0,O:0
  });

  function isGameFinished() {
    if (!gameover) {
      winCombos.forEach((el) => {
        if (
          grid[el[0]] === X_PLAYER &&
          grid[el[1]] === X_PLAYER &&
          grid[el[2]] === X_PLAYER
        ) {
          setgameover(true);
          console.log("X wins");
          setwincount({...wincount,X:wincount.X+1});
          return;
        }
      });
      winCombos.forEach((el) => {
        if (
          grid[el[0]] === O_PLAYER &&
          grid[el[1]] === O_PLAYER &&
          grid[el[2]] === O_PLAYER
        ) {
          setgameover(true);
          console.log("O wins");
          setwincount({...wincount,O:wincount.O+1});
          return;
        }
      });

      if (!grid.includes(INITIAL)) {
        setdraw(true);
        setgameover(true);
        console.log("Draw");
      }
    }
  }
  isGameFinished();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setplayer(!player);
  }

  function clearHistory(){
    setwincount({
        X:0,O:0
    });
    restartGame();
  }

  function restartGame(){
    setGrid([
        INITIAL,
        INITIAL,
        INITIAL,
        INITIAL,
        INITIAL,
        INITIAL,
        INITIAL,
        INITIAL,
        INITIAL,
      ])
      setgameover(false);
      setdraw(false);
  }

  return (
    <div>
    <h1 className="heading">Welcome to Tic-Tac-Toe</h1>
    {gameover && <Endgame clearHistory={clearHistory} wincount={wincount} restartGame={restartGame}player={player}
     draw={draw}/>}
      <div className="turns"> <h3> {player? "X's TURN" : "O's TURN"}</h3></div>
      <Square handleClick={handleClick} boxes={grid} />
     
      <div style={{textAlign:"center"}} className="win-history">
        X's wins : {wincount.X}
        <br />
        O's wins : {wincount.O}
    </div>
    </div>
    
  );
}

export default TicTacToe;
