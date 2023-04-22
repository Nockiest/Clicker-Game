let GameParameteres = {
  remainingLives: 10,
  waveNumber: 0,
  score: 20,
  money: 100,
  bullets: 5,
  clipSize: 5,
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
  })(),
  fields : [
    {
      name: "Clipsize++",
      cost: 100,
      description: "Increases the size of the tower's clip by 10%",
    },
    {
      name: "Damage++",
      cost: 200,
      description: "Increases the tower's damage output by 25%",
    },
    {
      name: "Reload++",
      cost: 150,
      description: "Reduces the tower's reload time by 20%",
    },
    {
      name: "Damage radius++",
      cost: 300,
      description: "Increases the tower's damage radius by 20%",
    },
    {
      name: "Watch tower",
      cost: 500,
      description: "A basic tower with decent range and damage",
    },
    {
      name: "Sniper tower",
      cost: 800,
      description: "A long-range tower that deals massive damage",
    },
    {
      name: "Gatling gun tower",
      cost: 600,
      description: "A rapid-fire tower with low damage but high rate of fire",
    },
    {
      name: "Laser tower",
      cost: 1000,
      description: "A high-tech tower that deals continuous laser damage",
    },
    {
      name: "Glue tower",
      cost: 400,
      description: "Slows down enemies with a sticky glue",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },
    /*{
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },*/
    /*{
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },*/
    /*{
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
    },*/
  ],
};

console.log(GameParameteres.waves);
export default GameParameteres;
/*
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

export default GameParameteres;*/