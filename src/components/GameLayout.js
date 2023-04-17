import React from 'react';
import '../..//style.scss';
import Battelground from "./Battelground";
import gameParameteres from "../game/gameParameteres";


function GameLayout() {
  let battelGroundWidth = 1300;
  let battelGroundHeight = 400;
    return (
      <span id="gameContainer" style={{ height: battelGroundHeight, margin: "0px auto"  }}>
      <Battelground 
      id="battelground" width={battelGroundWidth} height={battelGroundHeight} border= "brown 1px solid" />
      <div id="side-bar" style={{ height: "40%", margin: "0px auto" }}>
        {/* First row */}
        <div className="settings-row">
          <div className="settings-col"></div>
          <div className="settings-col"></div>
        </div>
        
        {/* Second row */}
        <div className="info-row">
          <div className="info-col">
            <div>a</div>
            <div>a</div>
          </div>
          <div className="info-col">
            <div>b</div>
            <div>b</div>
          </div>
        </div>
        
        {/* Third row */}
        <div className="buy-col">
          <div className="buy-row">c</div>
          <div className="buy-row">c</div>
          <div className="buy-row">c</div>
          <div className="buy-row">c</div>
        </div>
        
        {/* Fourth row */}
        <div className="button-row">
          <button id="next-wave-button">Next Wave</button>
        </div>
      </div>
    </span >
  );
}

export default GameLayout;