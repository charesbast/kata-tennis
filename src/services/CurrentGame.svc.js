const gameScoreUtils = require("../utils/gameScore.utils");

class CurrentGame {
  constructor(nameP1, nameP2) {
    this.player1 = {
      name : nameP1,
      score : '0',
    };
    this.player2 = {
      name : nameP2,
      score : '0',
    };
    this.winner = null;
  }

  // Pseudo private methods
  _pointForPlayer(player) {
    const newScore = gameScoreUtils.increaseScore(this[player].score);
    newScore !== "win"
      ? this[player] = {...this[player], score: newScore}
      : this.winner = this[player].name;
  }

  // Pseudo public methods
  pointForP1() {
    this._pointForPlayer("player1");
  }

  pointForP2() {
    this._pointForPlayer("player2");
  }

  displayScore() {
    return `
    Game score:
      ${this.player1.name} : ${this.player1.score}
      ${this.player2.name} : ${this.player2.score}
    `;
  }
}

module.exports = CurrentGame;