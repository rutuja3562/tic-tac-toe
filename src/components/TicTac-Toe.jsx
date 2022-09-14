import { useState } from "react";
import { EndGame } from "./Endgame";
import { Square } from "./Square";
import "../style.css";
const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

export const TictacToe = () => {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [gamefinished, setGamefinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [player, setPlayer] = useState(false);
  const clickedGrid = (id) => {
    if (!gamefinished) {
      setGrid(
        grid.map((e, i) => {
          if (i === id) {
            if (player) {
              return X_PLAYER;
            } else {
              return O_PLAYER;
            }
          } else {
            return e;
          }
        })
      );
      setPlayer(!player);
    }
  };

  function isGameOver() {
    if (!gamefinished) {
      // for X win
      for (let i = 0; i < 8; i++) {
        if (
          grid[winArray[i][0]] === X_PLAYER &&
          grid[winArray[i][1]] === X_PLAYER &&
          grid[winArray[i][2]] === X_PLAYER
        ) {
          setGamefinished(true);
          setGamefinished(true);
          console.log("X won");
          // alert("X Won")
          return;
        }
      }
      // for Y win
      for (let i = 0; i < 8; i++) {
        if (
          grid[winArray[i][0]] === O_PLAYER &&
          grid[winArray[i][1]] === O_PLAYER &&
          grid[winArray[i][2]] === O_PLAYER
        ) {
          setGamefinished(true);
          // setGamefinished(true);
          console.log("O won");
          // alert("X Won")
          return;
        }
      }
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGamefinished(true);
        console.log("drew");
        // alert("Draw")
      }
    }
  }
  isGameOver();
  const restart = () => {
    setGrid(Array(9).fill(INITIAL));
    setDraw(false);
    setGamefinished(false);
  };
  return (
    <div>
      {gamefinished && (
        <EndGame restart={restart} player={player} draw={draw} />
      )}
      <Square clickedArray={grid} clickedGrid={clickedGrid} />
    </div>
  );
};
