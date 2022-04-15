import React from 'react'

function Endgame({restartGame,player,draw,wincount,clearHistory}) {
    console.log(player,draw);
  return (
    <div className="end-screen">
    {!draw && <span className="win-txt">{player?"O WON" : "X WON"}</span>}
    {draw && <span className="win-txt">GAME DRAW</span>}

    <span className="win-history">
        X's wins : {wincount.X}
        <br />
        O's wins : {wincount.O}
    </span>
      <button className="btn" onClick={restartGame}>
          Restart Game
      </button>
      <button className="btn" onClick={clearHistory}>
          Clear History
      </button>
    </div>
  )
}

export default Endgame
