const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const referreeSvc = require("./referee.svc");
const CurrentGameSvc = require("./CurrentGame.svc");

const {expect} = chai;
chai.use(sinonChai);

describe("CurrentGame service", () => {
  let sandbox;
  let updateGameScoreStub;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    updateGameScoreStub = sandbox.stub(referreeSvc, "updateGameScore");
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("When creating a new instance with two player names ", () => {
    const p1Name = "Federer";
    const p2Name = "Djokovic";
    const CurrentGame = new CurrentGameSvc(p1Name, p2Name);

    it("Should save p1 name and set his score to '0'", () => {
      expect(CurrentGame.player1).to.deep.equal({
        name : p1Name,
        score : '0',
      });
    });

    it("Should save p2 name and set his score to '0'", () => {
      expect(CurrentGame.player2).to.deep.equal({
        name : p2Name,
        score : '0',
      });
    });

    it("Should set game winner at null", () => {
      expect(CurrentGame.winner).to.be.null;
    });
  });

  describe("pointForPlayer1", () => {
    const p1Name = "player1";
    const p2Name = "player2";
    const CurrentGame = new CurrentGameSvc(p1Name, p2Name);

    it("Should update players scores with the results of updateGameScore", () => {
      const updatedScore = ['30', '40'];
      updateGameScoreStub.returns(updatedScore);

      CurrentGame.player1.score = '15';
      CurrentGame.player2.score = '40';
      CurrentGame.pointForP1();

      expect(updateGameScoreStub).to.have.been.calledWith('15', '40');
      expect(CurrentGame.player1.score).to.equal(updatedScore[0]);
      expect(CurrentGame.player2.score).to.equal(updatedScore[1]);
    });

    describe("When the player1's new score is 'win'", () => {
      beforeEach(() => {
        updateGameScoreStub.returns(["win", "30"]);
      });

      it("Should set the winner with player1's name", () => {
        CurrentGame.pointForP1();
        expect(CurrentGame.winner).to.equal(p1Name);
      });
    });
  });

  describe("pointForPlayer2", () => {
    const p1Name = "player1";
    const p2Name = "player2";
    const CurrentGame = new CurrentGameSvc(p1Name, p2Name);

    it("Should update players scores with the results of increaseScore util", () => {
      const updatedScore = ['40', '15'];
      updateGameScoreStub.returns(updatedScore);

      CurrentGame.player1.score = '15';
      CurrentGame.player2.score = '30';
      CurrentGame.pointForP2();

      expect(updateGameScoreStub).to.have.been.calledWith('30', '15');
      expect(CurrentGame.player2.score).to.equal(updatedScore[0]);
      expect(CurrentGame.player1.score).to.equal(updatedScore[1]);
    });

    describe("When the new score is 'win'", () => {
      beforeEach(() => {
        updateGameScoreStub.returns(["win", "0"]);
      });

      it("Should set the winner with player1's name", () => {
        CurrentGame.pointForP2();
        expect(CurrentGame.winner).to.equal(p2Name);
      });
    });
  });

  describe("displayScore", () => {
    it("Should display the players score", () => {
      const p1Name = "player1";
      const p2Name = "player2";
      const CurrentGame = new CurrentGameSvc(p1Name, p2Name);

      CurrentGame.player1.score = '40';
      CurrentGame.player2.score = '15';

      const displayedScore = CurrentGame.formatScoreResult();
      expect(displayedScore.includes("player1 : 40")).to.be.true;
      expect(displayedScore.includes("player2 : 15")).to.be.true;
    });
  });
});