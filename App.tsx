import  { useState, useContext } from 'react';
import React from "react";
import './style.scss';
import GameLayout from "./src/components/GameLayout";
import gameParameteres from "./src/game/gameParameteres";

//const GameContext = React.createContext();

export default function App() {
  const [playerBullets, setPlayerBulletsNumber] = useState(gameParameteres.bullets);

  const changePlayerBulletsNumber = (ammount) => {
    setPlayerBulletsNumber(prevBullets => {
      console.log(prevBullets)
      const newBullets = prevBullets + ammount
      if (newBullets>0) {
        return newBullets;
      } else{
        console.log("No more bullets!");
        return 0;
      }
    })
  }  

  const handleEnemyKilled = (money) => {
    console.log(`You earned ${money} coins!`);
  };

  const gameData = {
    playerBullets,
    changePlayerBulletsNumber,
    handleEnemyKilled,
  };

  return (
    //<GameContext.Provider value={gameData}>
      <GameLayout gameData={gameData}/>
    //</GameContext.Provider>
  );
}

//zpomal je při kliknutí
//zobrazuj náboje
// dovol střílení jen když máš náboje
// přidej do hry věž
// zmenšuj čtverce, jak jim ubývají životy

//naformátuj settings bar
// zyšuj wave number stisknutím tlačítka
//přidej death animaci