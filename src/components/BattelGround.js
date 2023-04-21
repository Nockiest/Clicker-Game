import React, { useState, useContext } from 'react';
import '../..//style.scss';
import Enemy from "./Enemy";
import enemiesParameteres from "../game/enemyParameters";
import GameParameteres from "../game/GameParameteres";
import {logAtInterval,updateStateVariable,drawText,simulateBounce } from "../utils/utils"
//import { GameContext } from '../../App';
let consoleCalls = 0;

export default function BattelGround(props) {
   
  const handleEnemyKilled = (money) => {
    // ...
  };
  const canvasRef = React.useRef(null);
  const [enemies, setEnemies] = React.useState([]);
  const [waveNumber, setWaveNumber] = React.useState(20);

 const handleCanvasClick = (e) => {
  const rect = canvas.getBoundingClientRect();
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const clickedX = e.clientX - rect.left- scrollX;
  const clickedY = e.clientY - rect.top - scrollY;
  
  props.gameData.changePlayerBulletsNumber(-1);
  
  setEnemies(prevEnemies => {
    if(props.gameData.playerBullets <= 0) {return prevEnemies}
    return prevEnemies.map(enemy => {
      if (clickedX >= enemy.x && clickedX <= enemy.x + enemy.size &&
          clickedY >= enemy.y && clickedY <= enemy.y + enemy.size) {
        const updatedEnemy = { ...enemy, hitPoints: enemy.hitPoints - 1 };
        if (updatedEnemy.hitPoints <= 0) {
          handleEnemyKilled(updatedEnemy.moneyReward);
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
    const currentWave = GameParameteres.waves[waveNumber];
    const waveEnemies = Object.entries(currentWave).flatMap(([color, count]) => {
      const enemyParameters = enemiesParameteres[`${color}Enemy`];
      return Array.from({ length: count }, () => ({
        ...enemyParameters,
        x: Math.floor(Math.random()*500*(-1)),
        y: Math.min(props.height-enemyParameters.size,Math.floor(Math.random() * props.height)),
        speedModifier: 2,
      }));
    });
    setEnemies(waveEnemies);
  }, [waveNumber]); // set the enemies

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enemies.forEach(enemy => {
      ctx.fillStyle = enemy.color;
      ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
      ctx.strokeStyle = 'black'; // Set the border color to black
      ctx.strokeRect(enemy.x, enemy.y, enemy.size, enemy.size); // Draw the border
      
      // Render hitpoints number in the middle of the box
      drawText({ctx, fillStyle: 'white', fontSize: 16, fontFamily: 'Arial',  textAlign: 'center', 
     textBaseline: 'middle',  text: enemy.hitPoints, x: enemy.x + enemy.size/2, y: enemy.y + enemy.size/2,
      });
      
    });
  }, [enemies]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEnemies(prevEnemies => {
        return prevEnemies.map(enemy => {
          const Ymovement = simulateBounce(enemy.y, enemy.YSpeed,enemy.speedModifier, 0, props.height-enemy.size )//newzpos,speedModifier
          consoleCalls =logAtInterval(Ymovement, consoleCalls, 100)
          //consoleCalls =logAtInterval(enemy, consoleCalls, 101)
          enemy.speedModifier =Ymovement[1]
          const updatedEnemy = { ...enemy, x: enemy.x + enemy.Xspeed*Math.abs(enemy.speedModifier), y: Ymovement[0], YSpeed: enemy.YSpeed , speedModifier:enemy.speedModifier };
          if (updatedEnemy.x - updatedEnemy.size > props.width) {   
            console.log("life lost", GameParameteres.remainingLives--)
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




