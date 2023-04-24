import React, { useState, useContext } from 'react';
import '../..//style.scss';
import Enemy from "./Enemy";
import enemiesParameteres from "../game/enemyParameters";
import GameParameteres from "../game/GameParameteres";
import {logAtInterval,updateStateVariable,drawText,simulateBounce,isPositionInRange } from "../utils/utils"
//import { GameContext } from '../../App';
let consoleCalls = 0;

export default function BattelGround(props) {
  
  const canvasRef = React.useRef(null);
  const [enemies, setEnemies] = React.useState([]);

  const handleEnemyKilled = (money) => {
    props.setGameState("money", money);
  };

const handleCanvasClick = (e) => {
  const rect = canvas.getBoundingClientRect();
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const clickedX = e.clientX - rect.left - scrollX;
  const clickedY = e.clientY - rect.top - scrollY;
  
  props.setGameState("bullets", -1);
  
  setEnemies(prevEnemies => {
    if (props.gameData.bullets <= 0) {
      return prevEnemies;
    }
    return prevEnemies.map(enemy => {
      const [enemyCenterX, enemyCenterY] = [enemy.x + enemy.size/2, enemy.y + enemy.size/2];
      if (isPositionInRange([clickedX, clickedY], [enemyCenterX, enemyCenterY], enemy.size/2+props.gameData.clickRadius/2)) {
        const updatedEnemy = { ...enemy, hitPoints: enemy.hitPoints - props.gameData.damagePerClick , size: enemy.size-enemy.size*0.3/enemy.hitPoints, slowedDown: 50};
      
        if (updatedEnemy.hitPoints <= 0) {
          handleEnemyKilled(enemy.moneyReward)
          return null;
        }
        return updatedEnemy;
      } else {
        return enemy;
      }
    }).filter(enemy => enemy !== null);
  });
 
};

React.useEffect(() => {
  const currentWave = GameParameteres.waves[props.gameData.waveNumber];
  const waveEnemies = Object.entries(currentWave).flatMap(([color, count]) => {
    const enemyParameters = enemiesParameteres[`${color}Enemy`];
    return Array.from({ length: count }, () => ({
      ...enemyParameters,
      x: Math.floor(Math.random()*500*(-1)),
      y: Math.min(props.height-enemyParameters.size,Math.floor(Math.random() * props.height)),
      speedModifier: 1,
      slwoedDown: false,
    }));
  });

  setEnemies(prevEnemies => [...prevEnemies, ...waveEnemies]);
}, [props.gameData.waveNumber]); // set the enemies

React.useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  enemies.forEach(enemy => {
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(enemy.x, enemy.y, enemy.size, enemy.size);
    drawText({ctx, fillStyle: 'white', fontSize: 16, fontFamily: 'Arial',  textAlign: 'center', 
    textBaseline: 'middle',  text: enemy.hitPoints, x: enemy.x + enemy.size/2, y: enemy.y + enemy.size/2,
    });
  });

    const cursorX = props.data.cursorPosition.x;
    const cursorY = props.data.cursorPosition.y;
    const size = 50;

  if(props.data.selectedTower?.tower){
    ctx.strokeStyle = props.data.selectedTower?.color;
    ctx.fillStyle = props.data.selectedTower?.color;
    ctx.fillRect(cursorX - size/2, cursorY - size/2, size, size);
  } else {
    ctx.strokeRect(cursorX - props.gameData.clickRadius/2, cursorY - props.gameData.clickRadius/2, props.gameData.clickRadius, props.gameData.clickRadius);
  }
     

}, [enemies, props.data.cursorPosition]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEnemies(prevEnemies => {
        return prevEnemies.map(enemy => {
          let slowness = 5
          if(enemy.slowedDown){
            enemy.speedModifier = enemy.speedModifier/slowness
          }

          const Ymovement = simulateBounce(enemy.y, enemy.YSpeed, enemy.speedModifier, 0, props.height - enemy.size); //newzpos,speedModifier
          let modifiedXspeed = enemy.Xspeed * Math.abs(enemy.speedModifier)
          enemy.slowedDown?enemy.speedModifier =  Ymovement[1]*slowness:  enemy.speedModifier =  Ymovement[1]
          
  
          if (enemy.slowedDown !== false && enemy.slowedDown !== 0 && enemy.slowedDown !== undefined) {
            enemy.slowedDown -= 1;
          
          } else if (enemy.slowedDown === 0) {
            enemy.slowedDown = false;
          }

          const updatedEnemy = { ...enemy, x: enemy.x + modifiedXspeed, y: Ymovement[0], YSpeed: enemy.YSpeed };
  
          if (updatedEnemy.x - updatedEnemy.size > props.width) {
            props.setGameState("remainingLives", -1);
            return null; // return null to remove enemy from array
          }
     
          return updatedEnemy;
        }).filter(enemy => enemy !== null); // filter out null values to update array
      });
  
    }, 10); // move
  
    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <canvas ref={canvasRef} width={props.width} height={props.height} onClick={handleCanvasClick} id="canvas"></canvas>
  );
}




