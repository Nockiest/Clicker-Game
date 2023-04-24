import React, { useState } from "react";
import {logAtInterval,updateStateVariable,drawText,simulateBounce,isPositionInRange,changeIsNegative } from "../utils/utils"

function Field(props) {
  const { name, cost, description, onClick, setGameState, selectMovedTower, gameData, color,tower } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const data = {name, cost, description, color, tower }

  const handleClick = () => {
    if (onClick) {
      const [variable, number] = onClick;
      if(changeIsNegative(gameData.money, -cost)){return}
      setGameState(variable, number);
      setGameState("money", -cost);
    } else {
      console.log("This field doesn't have an onClick function.");
    }
    selectMovedTower(data);
  };

  return (
    <div className="field" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      {name && <div className="name">{name}</div>}
      <div className="buy-container">
        <div className={`buy ${isHovering ? "hover" : ""}`}>Buy</div>
      </div>
      {cost && <div className="cost">{cost} coins</div>}
      {isHovering && description && <div className="description">{description}</div>}
    </div>
  );
}

export default Field;
