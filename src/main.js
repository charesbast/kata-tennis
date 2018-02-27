const CurrentGame = require("./services/CurrentGame.svc");

function randomlyChooseAPlayer() {
  return Math.floor(Math.random() * Math.floor(2)) + 1; // 1 or 2
}

function startMatch() {
  const Game = new CurrentGame("Player1", "Player2");

  console.log("Tennis match begins");

  while (!Game.winner) {
    randomlyChooseAPlayer() === 1
      ? Game.pointForP1()
      : Game.pointForP2();
  }

  console.log(Game.displayScore());
  console.log(`Winner: ${Game.winner}!`);
}


startMatch();