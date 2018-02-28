const GAME_SCORE_VALUES = ["0", "15", "30", "40", "win"];
const GAME_SCORE_DEUCE_RULES = ["0", "15", "30", "40", "advantage", "win"];

function updateGameScoreWithDeuceRules(playerScore, opponnentScore) {
  const currentScoreIdx = GAME_SCORE_DEUCE_RULES.indexOf(playerScore);
  const nextPlayerScore = GAME_SCORE_DEUCE_RULES[currentScoreIdx + 1];

  if (nextPlayerScore === 'advantage' && opponnentScore === 'advantage') {
    return ['40', '40'];
  }

  return [nextPlayerScore, opponnentScore];
}

function updateGameScoreWithSimpleRules(playerScore, opponnentScore) {
  const currentScoreIdx = GAME_SCORE_VALUES.indexOf(playerScore);
  const nextPlayerScore = GAME_SCORE_VALUES[currentScoreIdx + 1];

  return [nextPlayerScore, opponnentScore];
}

function updateGameScore(playerScore, opponentScore) {
  return ['40', 'advantage'].includes(opponentScore)
    ? updateGameScoreWithDeuceRules(playerScore, opponentScore)
    : updateGameScoreWithSimpleRules(playerScore, opponentScore);
}

module.exports = {
  updateGameScore,
};