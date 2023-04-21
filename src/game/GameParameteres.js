/*let GameParameteres = {
  remainingLives: 10,
  waveNumber: 0,
  score: 20,
  money: 100,
  bullets: 5,
  damagePerClick: 1,
  waves: (() => {
    const wavesArr = [];
    for (let i = 1; i <= 40; i++) {
      let wave = {};
      let numRed =Math.floor(i / 2);
      let numBlue = Math.floor(i / 5);
      let numGreen = Math.floor(i / 10);
      let numYellow = Math.floor(i / 15);
      wave["red"] = numRed;
      wave["blue"] = numBlue;
      wave["green"] = numGreen;
      wave["yellow"] = numYellow;
      wave["boss"] = 1;
      wavesArr.push(wave);
    }
    return wavesArr;
  })()
};

console.log(GameParameteres.waves);
export default GameParameteres;*/

import React from "react";

class GameParameteres extends React.Component {
  state = {
    remainingLives: 10,
    waveNumber: 0,
    score: 20,
    money: 100,
    bullets: 5,
    damagePerClick: 1,
    waves: (() => {
      const wavesArr = [];
      for (let i = 1; i <= 40; i++) {
        let wave = {};
        let numRed = Math.floor(i / 2);
        let numBlue = Math.floor(i / 5);
        let numGreen = Math.floor(i / 10);
        let numYellow = Math.floor(i / 15);
        wave["red"] = numRed;
        wave["blue"] = numBlue;
        wave["green"] = numGreen;
        wave["yellow"] = numYellow;
        wave["boss"] = 1;
        wavesArr.push(wave);
      }
      return wavesArr;
    })(),
  };

  changeStateValue = (stateName, amount) => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + amount
    }));
  }

  render() {
    const { remainingLives, waveNumber, score, money, bullets, damagePerClick } = this.state;
    return (
      <div>
        <div>Remaining Lives: {remainingLives}</div>
        <div>Wave Number: {waveNumber}</div>
        <div>Score: {score}</div>
        <div>Money: {money}</div>
        <div>Bullets: {bullets}</div>
        <div>Damage Per Click: {damagePerClick}</div>
        <button onClick={() => this.changeStateValue("remainingLives", -1)}>Lose a Life</button>
        <button onClick={() => this.changeStateValue("money", 10)}>Gain 10 Money</button>
      </div>
    );
  }
}

export default GameParameteres;