import  { useState, useContext } from 'react';
import React from "react";
import ReactDOM from 'react-dom';
import './style.scss';
import GameLayout from "./src/components/GameLayout";
import GameParameteres from "./src/game/GameParameteres";
//napsat novou proměnou do gameparmeteres
// udělat use state 
//připsat case pro nový use state
// napsat nový state do gameData
 
//const GameContext = React.createContext();

export default function App() {
  const [remainingLives, setRemainingLives] = useState(GameParameteres.remainingLives);
  const [waveNumber, setWaveNumber] = useState(GameParameteres.waveNumber);
  const [score, setScore] = useState(GameParameteres.score);
  const [money, setMoney] = useState(GameParameteres.money);
  const [bullets, setBullets] = useState(GameParameteres.bullets);
  const [damagePerClick, setDamagePerClick] = useState(GameParameteres.damagePerClick);
  const [clickRadius, setClickRadius] = useState(GameParameteres.clickRadius);
  const [clipSize, setClipSize] = useState(GameParameteres.clipSize)

  
  // An object to store functions
  const setters = {
    bullets: setBullets,
    clipSize: setClipSize,
    clickRadius: setClickRadius,
    damagePerClick: setDamagePerClick,
    score: setScore,
    waveNumber: setWaveNumber,
    remainingLives: setRemainingLives,
    money: setMoney,
  }
  
  const setGameState = (key, value) => {
    
    if (typeof(setters[key]) !== 'function') {
      console.warn(`Invalid key: ${key}`, typeof(setters[key]));
      return;
    }
    if(key === "bullets"){
     return setBullets(prevBullets => {
        const newBullets = prevBullets + value
        if (newBullets>=0 && newBullets <= clipSize) {
          return newBullets;
        } else{
          return prevBullets;
        }
      })
    } else if (key === "money"){
      setMoney(prevValue => {
        const newMoney = prevValue + value;
        return newMoney < 0 ? 0 : newMoney;
      });
    }
    console.log(key)
    setters[key](prevValue => prevValue + value);
  };
  
  
  
  

  const handleEnemyKilled = (money) => {
    console.log(`You earned ${money} coins!`);
  };

  const gameData = {
    remainingLives,
    waveNumber,
    setWaveNumber,
    score,
    setScore,
    money,
    bullets,
    damagePerClick,
    handleEnemyKilled,
    clipSize,
    clickRadius
  };

  return <GameLayout gameData={gameData} setGameState={setGameState} />;
}
 
// napiš funkci pro kreslení čtverců
// napiš funkci, která bude vykreslovat určitý component po vymezenou dobu
// přidej do hry věž
// přidej obrázek věže když ji pokládáš do hry
// přidej death animaci 
//zobraz svůj click radius na canvas

/* const setGameState = (key, value) => {
    switch(key) {
      case "remainingLives":
        setRemainingLives(prevValue => prevValue  + value);
        break;
      case "waveNumber":
        setWaveNumber(prevValue => prevValue  +value);
        break;
      case "score":
        setScore(prevValue => prevValue  +value);
        break;
      case "money":
        setMoney(prevValue => {
          const newMoney = prevValue + value;
          return newMoney < 0 ? 0 : newMoney;
        });
        break;
      case "damagePerClick":
        setDamagePerClick(prevValue => prevValue  +value);
        break;
      case "clipSize":
        setClipSize(prevValue => prevValue  +value);
          break;     
      case "clickRadius":
        setClickRadius(prevValue => prevValue  +value);
      case "bullets":
        setBullets(prevBullets => {
          const newBullets = prevBullets + value
          if (newBullets>=0 && newBullets <= clipSize) {
            return newBullets;
          } else{
            return prevBullets;
          }
        });
        break;
      default:
        console.warn(`Invalid key: ${key}`);
    }
  };*/