let enemiesParameteres = {
  redEnemy: {
    hitPoints: 5,
    Xspeed: 3,
    YSpeed: 0,
    color: "red",
    moneyReward: 15,
    size: Math.random() * 20 + 40,
    
  },
  blueEnemy: {
    hitPoints: 10,
    Xspeed: 2,
    YSpeed: 1,
    color: "blue",
    moneyReward: 10,
    size: Math.random() * 20 + 70,
  }, 
  yellowEnemy: {
    hitPoints: 20,
    Xspeed: 4,
    YSpeed: 2,
    color: "yellow",
    moneyReward: 20,
    size: Math.random() * 10 + 30,
     
  },
  greenEnemy: {
    hitPoints: 20,
    Xspeed: 4,
    YSpeed: 3,
    color: "green",
    moneyReward: 30,
    size: Math.random() * 10 + 30,
  },
  bossEnemy:{
    hitPoints: 100,
    Xspeed: 0.5,
    YSpeed: 1,
    color: "black",
    moneyReward: 30,
    size: Math.random() * 100 + 30,
  }
};
export default enemiesParameteres