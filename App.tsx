import  { useState, useContext } from 'react';
import React from "react";
import './style.scss';
import GameLayout from "./src/components/GameLayout";
import GameParameteres from "./src/game/GameParameteres";

//const GameContext = React.createContext();

export default function App() {
  const [remainingLives, setRemainingLives] = useState(GameParameteres.remainingLives);
  const [waveNumber, setWaveNumber] = useState(GameParameteres.waveNumber);
  const [score, setScore] = useState(GameParameteres.score);
  const [money, setMoney] = useState(GameParameteres.money);
  const [bullets, setBullets] = useState(GameParameteres.bullets);
  const [damagePerClick, setDamagePerClick] = useState(GameParameteres.damagePerClick);
  const [clipSize, setClipSize] = useState(GameParameteres.clipSize)
  
  const setGameState = (key, value) => {
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
        setMoney(prevValue => prevValue  +value);
        break;
      case "bullets":
        setBullets(prevBullets => {
          const newBullets = prevBullets + value
          if (newBullets>=0 && newBullets < clipSize) {
            return newBullets;
          } else{
            return prevBullets;
          }
        });
        break;
      case "damagePerClick":
        setDamagePerClick(prevValue => prevValue  +value);
        break;
      case "clipSize":
        setClipSize(prevValue => prevValue  +value);
          break;
      
      default:
        console.warn(`Invalid key: ${key}`);
    }
  };

  const handleEnemyKilled = (money) => {
    console.log(`You earned ${money} coins!`);
  };

  const gameData = {
    remainingLives,
    setRemainingLives,
    waveNumber,
    setWaveNumber,
    score,
    setScore,
    money,
    setMoney,
    bullets,
    damagePerClick,
    setDamagePerClick,
    handleEnemyKilled,
    clipSize,
  };

  return <GameLayout gameData={gameData} setGameState={setGameState} />;
}

// zapisuj informace do game stats sekce
//zpomal je při kliknutí
// přidej do hry věž
// zmenšuj čtverce, jak jim ubývají životy
// zyšuj wave number stisknutím tlačítka
//přidej death animaci


  /*const changeBullets = (amount) => {
    setBullets((prevBullets) => {
      const newBullets = prevBullets + amount;
      if (newBullets > 0) {
        return newBullets;
      } else {
        console.log("No more bullets!");
        return 0;
      }
    });
  };*/