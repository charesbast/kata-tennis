const GAME_SCORE_VALUES = ["0", "15", "30", "40", "win"];

function increaseScore(currentScore) {
  const currentScoreIdx = GAME_SCORE_VALUES.indexOf(currentScore);
  const nextScore = GAME_SCORE_VALUES[currentScoreIdx + 1];

  if(!nextScore) {
    throw new Error("The player already won the game");
  }

  return nextScore;
}

module.exports = {
  increaseScore,
};