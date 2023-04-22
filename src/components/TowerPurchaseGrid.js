import React from "react";
//import "./styles.scss";
import Field from "./Field"
import GameParameteres from "../game/GameParameteres"
function TowerPurchaseGrid() {
  const numRows = 3;
  const numCols = 4;

  /*const fields = [
    {
      name: "Clipsize++",
      cost: 100,
      description: "Increases the size of the tower's clip by 10%",
    },
    {
      name: "Damage++",
      cost: 200,
      description: "Increases the tower's damage output by 25%",
    },
    {
      name: "Reload++",
      cost: 150,
      description: "Reduces the tower's reload time by 20%",
    },
    {
      name: "Damage radius++",
      cost: 300,
      description: "Increases the tower's damage radius by 20%",
    },
    {
      name: "Watch tower",
      cost: 500,
      description: "A basic tower with decent range and damage",
    },
    {
      name: "Sniper tower",
      cost: 800,
      description: "A long-range tower that deals massive damage",
    },
    {
      name: "Gatling gun tower",
      cost: 600,
      description: "A rapid-fire tower with low damage but high rate of fire",
    },
    {
      name: "Laser tower",
      cost: 1000,
      description: "A high-tech tower that deals continuous laser damage",
    },
    {
      name: "Glue tower",
      cost: 400,
      description: "Slows down enemies with a sticky glue",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {  
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
  ];*/

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