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

  updateScores(scoreP1, scoreP2) {
    this.player1.score = scoreP1;
    this.player2.score = scoreP2;
  }

  // Pseudo public methods
  pointForP1() {
    console.log("Player1 scores:");
    const [p1Score, p2Score] = gameScoreUtils.increaseScore(this.player1.score, this.player2.score);

    this.updateScores(p1Score, p2Score);

    if (p1Score === "win") {
      this.winner = this.player1.name;
    }
  }

  pointForP2() {
    console.log("Player2 scores:");
    const [p2Score, p1Score] = gameScoreUtils.increaseScore(this.player2.score, this.player1.score);

    this.updateScores(p1Score, p2Score);

    if(p2Score === "win") {
      this.winner = this.player2.name;
    }
  }

  displayScore() {
    return `    ${this.player1.name} : ${this.player1.score}
    ${this.player2.name} : ${this.player2.score}
    `;
  }
}

module.exports = CurrentGame;