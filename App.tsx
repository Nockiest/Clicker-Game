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
// dej jim border,
// ukazuj jejich zbývající životy
//dovol jim se hýbat i po x coordinátu


// zyšuj wave number stisknutím tlačítka
//přidej death animaci