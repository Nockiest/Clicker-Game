import React from 'react';
import '../..//style.scss';
import Enemy from "./Enemy";
import enemiesParameteres from "../game/enemyParameters";
import gameParameteres from "../game/gameParameteres";
import {logAtInterval} from "../utils/utils";
let consoleCalls = 0;

export default function BattelGround(props) {
  const handleEnemyKilled = (money) => {
    // ...
  };
  const canvasRef = React.useRef(null);
  const [enemies, setEnemies] = React.useState([]);
  const [waveNumber, setWaveNumber] = React.useState(10);
  const [playerBullets, setPlayerBullets] = React.useState(gameParameteres.bullets)
 // console.log(playerBullets)
 const handleCanvasClick = (e) => {
  const rect = canvas.getBoundingClientRect();
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const clickedX = e.clientX - rect.left- scrollX;
  const clickedY = e.clientY - rect.top - scrollY;
  
  setPlayerBullets(prevBullets => prevBullets - 1);
  setEnemies(prevEnemies => {
    return prevEnemies.map(enemy => {
      console.log(clickedX,clickedY,enemy.x,enemy.y, rect.left, rect.top)
        console.log(clickedX >= enemy.x , clickedX <= enemy.x + enemy.size ,
          clickedY >= enemy.y ,clickedY <= enemy.y + enemy.size)
      if (clickedX >= enemy.x && clickedX <= enemy.x + enemy.size &&
          clickedY >= enemy.y && clickedY <= enemy.y + enemy.size) {
            
        const updatedEnemy = { ...enemy, hitPoints: enemy.hitPoints - 1 };
        console.log(updatedEnemy)
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
    const currentWave = gameParameteres.waves[waveNumber];
    const waveEnemies = Object.entries(currentWave).flatMap(([color, count]) => {
      const enemyParameters = enemiesParameteres[`${color}Enemy`];
      return Array.from({ length: count }, () => ({
        ...enemyParameters,
        x: enemyParameters.startX,
        y: Math.min(props.height-enemyParameters.size,Math.floor(Math.random() * props.height)),
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
      ctx.fillStyle = 'white';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(enemy.hitPoints, enemy.x + enemy.size/2, enemy.y + enemy.size/2);
    });
  }, [enemies]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEnemies(prevEnemies => {
        return prevEnemies.map(enemy => {
          const updatedEnemy = { ...enemy, x: enemy.x /*+ enemy.speed*/ };
          if (updatedEnemy.x - updatedEnemy.size > props.width) {
            console.log("life lost");
            return null; // return null to remove enemy from array
          }
   // consoleCalls = 
    logAtInterval(prevEnemies, consoleCalls, 100)
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




