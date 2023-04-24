import React from "react";
//import "./styles.scss";
import Field from "./Field"
import GameParameteres from "../game/GameParameteres"
import {logAtInterval,updateStateVariable,drawText,simulateBounce,isPositionInRange,changeIsNegative } from "../utils/utils"
function TowerPurchaseGrid(props) {
  const numRows = 2;
  const numCols = 6;

  const setGameState = (variable, number) => {
    // Do something with the variable and number
    console.log(`Setting ${variable} to ${number}`);
  };

  document.documentElement.style.setProperty('--num-rows', numRows);
  document.documentElement.style.setProperty('--num-cols', numCols);

  // Find the widest component's width
  let maxWidth = 0;
  GameParameteres.fields.forEach(field => {
    const element = document.createElement("div");
    element.innerHTML = field.name;
    document.body.appendChild(element);
    const width = element.clientWidth;
   // console.log(width)
    document.body.removeChild(element);
    
    if (width > maxWidth) {
      //console.log(maxWidth,"maxwidth")
      maxWidth = width;
    }
  });
 
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const fieldIndex = i * numCols + j;
      row.push(
        <Field
          key={GameParameteres.fields[fieldIndex]?.name}
          name={GameParameteres.fields[fieldIndex]?.name}
          cost={GameParameteres.fields[fieldIndex]?.cost}
          description={GameParameteres.fields[fieldIndex]?.description}
          onClick={GameParameteres.fields[fieldIndex]?.onClick}
          color={GameParameteres.fields[fieldIndex]?.color}
          tower={GameParameteres.fields[fieldIndex]?.tower}
          setGameState={props.setGameState}
          gameData={props.gameData}
          selectMovedTower={props.selectMovedTower}
          style={{ width: `${maxWidth}px` }} // Apply the widest component's width
        />
      );
    }
    rows.push(<div className="row" key={i}>{row}</div>);
  }

  return (
    <div className="grid">
      {rows}
    </div>
  );
}

export default TowerPurchaseGrid;