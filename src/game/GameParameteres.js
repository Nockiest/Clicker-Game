let GameParameteres = {
  remainingLives: 10,
  waveNumber: 0,
  score: 20,
  money: 1000,
  bullets: 5,
  clipSize: 5,
  damagePerClick: 1,
  clickRadius: 100,
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
  fields: [
    {
      name: "Clipsize++",
      cost: 100,
      description: "Increases the size of the tower's clip by 10%",
      onClick: ["clipSize", 1],
      color: "blue",
      tower: false,
      hitpoints: 100,
      damage: 10,
      size: 10,
    },
    {
      name: "Damage++",
      cost: 200,
      description: "Increases the tower's damage output by 25%",
      onClick: ["damagePerClick", 1],
      color: "red",
      tower: false,
      hitpoints: 120,
      damage: 25,
      size: 10,
    },
    {
      name: "Reload++",
      cost: 150,
      description: "Reduces the tower's reload time by 20%",
      onClick: ["reload", 1],
      color: "green",
      tower: false,
      hitpoints: 80,
      damage: 15,
      size: 10,
    },
    {
      name: "Click radius++",
      cost: 300,
      description: "Increases the tower's damage radius by 20%",
      onClick: ["clickRadius", 1],
      color: "purple",
      tower: false,
      hitpoints: 150,
      damage: 20,
      size: 10,
    },
    {
      name: "Watch tower",
      cost: 500,
      description: "A basic tower with decent range and damage",
      color: "orange",
      tower: true,
      hitpoints: 200,
      damage: 30,
      size: 10,
    },
    {
      name: "Sniper tower",
      cost: 800,
      description: "A long-range tower that deals massive damage",
      color: "teal",
      tower: true,
      hitpoints: 250,
      damage: 50,
      size: 10,
    },
    {
      name: "Gatling gun tower",
      cost: 600,
      description: "A rapid-fire tower with low damage but high rate of fire",
      color: "pink",
      tower: true,
      hitpoints: 180,
      damage: 5,
      size: 10,
    },
    {
      name: "Laser tower",
      cost: 1000,
      description: "A high-tech tower that deals continuous laser damage",
      color: "yellow",
      tower: true,
      hitpoints: 300,
      damage: 40,
      size: 10,
    },
    {
      name: "Glue tower",
      cost: 400,
      description: "Slows down enemies with a sticky glue",
      color: "lime",
      tower: true,
      hitpoints: 300,
      damage: 40,
      size: 10,
    },
    {
      name: "Freeze tower",
      cost: 450,
      description: "Freezes enemies in their tracks",
      color: "cyan",
      tower: true,
      hitpoints: 300,
      damage: 40,
      size: 10,
    },
    {
      name: "Plasma Tower",
      cost: 450,
      description: "Vaporizes Anything that comes to close",
      color: "magenta",
      tower: true,
      hitpoints: 300,
      damage: 40,
      size: 10,
    },
    {
      name: "Fire Tower",
      cost: 450,
      description: "Scorches the ground around it",
      color: "brown",
      tower: true,
      hitpoints: 300,
      damage: 40,
      size: 10,
    },
    {
      name: "Spikes",
      cost: 450,
      description: "one use, damages an enemy who crosses it",
      color: "grey",
      tower: false,
      hitpoints: 1,
      damage: 40,
      size: 10,
    }
  ],
};

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