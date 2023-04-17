let enemiesParameteres = {
  redEnemy: {
    hitPoints: 5,
    speed: 3,
    color: "red",
    moneyReward: 15,
    size: Math.random() * 20 + 40,
    startX: 0,
  },
  blueEnemy: {
    hitPoints: 10,
    speed: 2,
    color: "blue",
    moneyReward: 10,
    size: Math.random() * 20 + 70,
    startX: 0,
  }, 
  yellowEnemy: {
    hitPoints: 20,
    speed: 4,
    color: "yellow",
    moneyReward: 20,
    size: Math.random() * 10 + 30,
    startX: 0,
  },
  greenEnemy: {
    hitPoints: 20,
    speed: 4,
    color: "green",
    moneyReward: 30,
    size: Math.random() * 10 + 30,
    startX: 0,
  }
};
export default enemiesParameteres