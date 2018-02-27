const GAME_SCORE_VALUES = ["0", "15", "30", "40", "win"];
const GAME_SCORE_DEUCE_RULES = ["0", "15", "30", "40", "advantage", "win"];

function increaseScoreWithDeuceRules(currentScore, opponnentScore) {
  const currentScoreIdx = GAME_SCORE_DEUCE_RULES.indexOf(currentScore);
  const nextPlayerScore = GAME_SCORE_DEUCE_RULES[currentScoreIdx + 1];

  if (nextPlayerScore === 'advantage' && opponnentScore === 'advantage') {
    return ['40', '40'];
  }

  return [nextPlayerScore, opponnentScore];
}

function increaseScoreWithSimpleRules(currentScore, opponnentScore) {
  const currentScoreIdx = GAME_SCORE_VALUES.indexOf(currentScore);
  const nextPlayerScore = GAME_SCORE_VALUES[currentScoreIdx + 1];

  return [nextPlayerScore, opponnentScore];
}

function increaseScore(currentScore, opponnentScore) {
  return ['40', 'advantage'].includes(opponnentScore)
    ? increaseScoreWithDeuceRules(currentScore, opponnentScore)
    : increaseScoreWithSimpleRules(currentScore, opponnentScore);
}

module.exports = {
  increaseScore,
};