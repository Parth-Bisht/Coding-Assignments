import React from "react";

function Square({ boxes, handleClick }) {
  return (
    <div className="board">
      {boxes.map((box, index) => {
        {
          return box === "" ? (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="square"
            >
              {box}
            </div>
          ) : (
            <div key={index} className="square clicked">
              {box}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Square;
