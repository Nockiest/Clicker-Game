import React, { useState, useContext } from 'react';
import './style.scss';
import GameLayout from "./src/components/GameLayout"
import gameParameteres from "./src/game/gameParameteres"

const GameContext = React.createContext();

export default function App() {
  const [playerBullets, setPlayerBulletsNumber] = useState(gameParameteres.bullets);

  const changePlayerBulletsNumber = (ammount) => {
    setPlayerBulletsNumber(prevAmmout => prevAmmout + ammount)
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
    <GameContext.Provider value={gameData}>
      <GameLayout />
    </GameContext.Provider>
  );
}

//dovol jim se hýbat i po y coordinátu
//zpomal je při kliknutí
// doplňuj náboje
//zobrazuj náboje
// dovol střílení jen když máš náboje
// přidej do hry věž
// zmenšuj čtverce, jak jim ubývají životy

//naformátuj settings bar
// zyšuj wave number stisknutím tlačítka
//přidej death animaci