let gameParameteres = {
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

console.log(gameParameteres.waves);
export default gameParameteres;