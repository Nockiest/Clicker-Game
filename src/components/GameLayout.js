import React, { useState, useContext } from 'react';
import '../..//style.scss';
import BattelGround from "./BattelGround";
import gameParameteres from "../game/gameParameteres";
import '../../style.scss';
import { GameContext } from '../../App';

function GameLayout() {
  const { playerBullets, setPlayerBulletsNumber } = useContext(GameContext);
  let battelGroundHeight = 400;
  let battelGroundWidth = 1300;
  let layoutStyles = {
    height: '100vh',
    width: '100%',
  };
  let battlegroundStyles = {
    height: `${battelGroundHeight}px`,
    display: 'block',
    border: 'brown 2px solid',
  };
  
  return (
    <span style={layoutStyles}>
      <BattelGround style={battlegroundStyles} height={battelGroundHeight} width={battelGroundWidth}/>
      <div id="side-bar">
  {/* First row */}
  {<div className="settings-row">
    <div className="settings-col"></div>
    <div className="settings-col"></div>
  </div>}
  
  {/* Second row */}
  {<div className="info-row">
    <div className="info-col">
      <div>a</div>
      <div>a</div>
    </div>
    <div className="info-col">
      <div>b</div>
      <div>b</div>
    </div>
  </div>}
  
  {/* Third row */}
  {<div className="buy-col">
    <div className="buy-row">c</div>
    <div className="buy-row">c</div>
    <div className="buy-row">c</div>
    <div className="buy-row">c</div>
  </div>}
  
  {/* Fourth row */}
  {<div className="button-row">
    <button id="next-wave-button">Next Wave</button>
  </div>}
</div>
</span>
  );
}

export default GameLayout;