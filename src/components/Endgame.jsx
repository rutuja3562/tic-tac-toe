import React from "react";
import "../style.css";
export const EndGame = ({ restart, player, draw }) => {
  return (
    <div className="end-game-screen">
      {!draw && <span className="wintext">{player ? "O WON" : "X WON"} </span>}
      {draw && <span className="wintext">Draw</span>}
      <button onClick={restart} className="btn">
        Restart Game
      </button>
    </div>
  );
};
