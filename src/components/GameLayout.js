import React, { useEffect, useState, useContext } from 'react';
import '../..//style.scss';
import BattelGround from "./BattelGround";
import GameParameteres from "../game/GameParameteres";
import StatsBar from "./StatsBar"
import '../../style.scss';
import TowerPurchaseGrid from "./TowerPurchaseGrid"
//import { GameContext } from '../../App';

function GameLayout(props) {
  const [selectedTower, setSelectedTower] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  let battelGroundHeight = 400;
  let battelGroundWidth = 1300;
  let layoutStyles = {
    height: '100vh',
   // width: '100%',
  };
  let battlegroundStyles = {
    height: `${battelGroundHeight}px`,
    overflowX: 'hidden',
  };

  const selectMovedTower = (value) => {
    console.log(value);
    setSelectedTower(value);
    console.log(selectedTower)
  }

  function selectTower(cell) {
    // Get the src attribute of the img element in the cell
    //const imgSrc = cell.childNodes[1].getAttribute("src");
  

    const cursor = document.createElement("p");
    cursor.innerHTML = value;
    cursor.id = "cursor";
    document.body.appendChild(cursor);
    cursor.style.position = "absolute";
    cursor.style.left = -20 + event.clientX + window.scrollX + 'px';
    cursor.style.top = -20 + event.clientY + window.scrollY + 'px';
    cursor.style.pointerEvents = "none";
    document.onmousemove = e => { 
      cursor.style.left = -20 +  e.pageX  + 'px';
      cursor.style.top = -20 + e.pageY + 'px';
      cursor.style.pointerEvents = "none";
    };
    targetGridCell(cellId).innerHTML = ""
}
useEffect(() => {
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };
  document.addEventListener("mousemove", handleMouseMove);
  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

const data = {
  cursorPosition,
  selectedTower
}

  return (
    <div style={layoutStyles}>
      <BattelGround style={battlegroundStyles} height={battelGroundHeight} width={battelGroundWidth} gameData={props.gameData} setGameState={props.setGameState}
      data={data} />
      <div id="lowerBarContainer"> 
        <div id="reload-area"  >
          <button onClick={() => props.setGameState("bullets",1)}>Reload</button>
        </div>
        
        <div id="side-bar"  >
          <StatsBar 
            stats={[
              `Bullets: ${props.gameData.bullets}/${props.gameData.clipSize}`,
              `Current damage: ${props.gameData.damagePerClick}`,
              `Money: ${props.gameData.money}`,
              `Wave: ${props.gameData.waveNumber}`,
              `Enemies: `,
              `Killed: ${props.gameData.score}`,
            ]}
          />

          <TowerPurchaseGrid gameData={props.gameData} setGameState={props.setGameState} selectMovedTower={selectMovedTower} />

          <div className="column">c</div>
          
          <div className="column">
          <button onClick={() => {
              props.setGameState("waveNumber", 1);
              props.setGameState("bullets",props.gameData.clipSize - props.gameData.bullets);
            }}>Next Wave</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameLayout;
/*props.setGameState("bullets",-1)*/
/*${props.gameData.waves[props.gameData.waveNumber].red + props.gameData.waves[props.gameData.waveNumber].blue + props.gameData.waves[props.gameData.waveNumber].green + props.gameData.waves[props.gameData.waveNumber].yellow}`*/

/* {/* First row *//*}*/
/*{<div className="settings-row">
<div className="settings-col">{props.gameData.playerBullets}</div>
<div className="settings-col"></div>
</div>}*/

{/* Second row */}
/*{<div className="info-row">
<div className="info-col">
  <div>a</div>
  <div>a</div>
</div>
<div className="info-col">
  <div>b</div>
  <div>b</div>
</div>
</div>}*/

{/* Third row */}
/*{<div className="buy-col">
<div className="buy-row">c</div>
<div className="buy-row">c</div>
<div className="buy-row">c</div>
<div className="buy-row">c</div>
</div>}*/

{/* Fourth row */}
/*{<div className="button-row">
<button id="next-wave-button">Next Wave</button>
</div>}}*/