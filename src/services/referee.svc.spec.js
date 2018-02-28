const {expect} = require("chai");

const {updateGameScore} = require("./referee.svc");

describe("gameScore utils", () => {
  describe("updateGameScore", () => {
    describe("When opponnent's score is less than 40", () => {
      const opponnentScore = '30';

      describe("when playerScore is '0'", () => {
        const playerScore = '0';

        it("should return '15' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['15', opponnentScore]);
        });
      });

      describe("when playerScore is '15'", () => {
        const playerScore = '15';

        it("should return '30' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['30', opponnentScore]);
        });
      });

      describe("when playerScore is '30'", () => {
        const playerScore = '30';

        it("should return '40' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['40', opponnentScore]);
        });
      });

      describe("when playerScore is '40'", () => {
        const playerScore = '40';

        it("should return 'win' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['win', opponnentScore]);
        });
      });
    });

    describe("when the opponnent's score is 40", () => {
      const opponnentScore = '40';

      describe("when playerScore is '0'", () => {
        const playerScore = '0';

        it("should return '15' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['15', opponnentScore]);
        });
      });

      describe("when playerScore is '15'", () => {
        const playerScore = '15';

        it("should return '30' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['30', opponnentScore]);
        });
      });

      describe("when playerScore is '30'", () => {
        const playerScore = '30';

        it("should return '40' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['40', opponnentScore]);
        });
      });

      describe("when playerScore is '40'", () => {
        const playerScore = '40';

        it("should return 'advantage' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['advantage', opponnentScore]);
        });
      });

      describe("when playerScore is 'advantage'", () => {
        const playerScore = 'advantage';

        it("should return 'win' for the player", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['win', opponnentScore]);
        });
      });
    });

    describe("when the opponnent's score is 'advantage'", () => {
      const opponnentScore = 'advantage';

      describe("when player score is 40", () => {
        const playerScore = '40';

        it("should return ['40', '40']", () => {
          expect(updateGameScore(playerScore, opponnentScore)).to.deep.equal(['40', '40']);
        });
      });
    });
  });
});