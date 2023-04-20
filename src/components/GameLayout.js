import React, { useState, useContext } from 'react';
import '../..//style.scss';
import BattelGround from "./BattelGround";
import gameParameteres from "../game/gameParameteres";
import StatsBar from "./StatsBar"
import '../../style.scss';
import TowerPurchaseGrid from "./TowerPurchaseGrid"
//import { GameContext } from '../../App';

function GameLayout(props) {
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
  
  return (
    <div style={layoutStyles}>
      <BattelGround style={battlegroundStyles} height={battelGroundHeight} width={battelGroundWidth} gameData={props.gameData}/>
      <div id="lowerBarContainer"> 
      <div id="reload-area"  >
        <button onClick={() => props.gameData.changePlayerBulletsNumber(1)}>Reload</button>
      </div>
      <div id="side-bar"  >
      
      <StatsBar stats={['Bullets:', 'Current damage:', 'Money:', 'Wave:', 'Enemies:', 'Killed:']} />

      <TowerPurchaseGrid />

       <div className="column">c</div>
       
       <div className="column">
         <button onClick={() => props.gameData.changePlayerBulletsNumber(1)}>Next Wave</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default GameLayout;

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