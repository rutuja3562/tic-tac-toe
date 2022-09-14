import React from "react";
import "../style.css";
export const Square = ({ clickedArray, clickedGrid }) => {
  return (
    <div className="grid">
      {clickedArray.map((item, i) => {
        if (item === "") {
          return (
            <div className="square" key={i} onClick={() => clickedGrid(i)}>
              {item}
            </div>
          );
        } else {
          return (
            <div className="square clicked" key={i}>
              {item}
            </div>
          );
        }
      })}
    </div>
  );
};
