import * as React  from 'react';
import './style.scss';
import GameLayout from "./src/components/GameLayout"

export default function App() {
  
  const handleEnemyKilled = (money) => {
    console.log(`You earned ${money} coins!`);
  };

  return (
    <>
      <GameLayout />      
    </>
  );
}

//načítej nepřátele postupně;
//dovol jim se hýbat i po y coordinátu
//zpomal je při kliknutí
// doplňuj náboje
//zobrazuj náboje
// dovol střílení jen když máš náboje
// přidej do hry věž


//naformátuj settings bar
// zyšuj wave number stisknutím tlačítka
//přidej death animaci