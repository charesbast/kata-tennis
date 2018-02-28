const {expect} = require("chai");

const {
  increaseGameScore,
  increaseSetScore,
} = require("./gameScore.utils");

describe("gameScore utils", () => {
  describe("increaseGameScore", () => {
    describe("When opponnent's score is less than 40", () => {
      const opponnentScore = '30';

      describe("when playerScore is '0'", () => {
        const playerScore = '0';

        it("should return '15' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['15', opponnentScore]);
        });
      });

      describe("when playerScore is '15'", () => {
        const playerScore = '15';

        it("should return '30' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['30', opponnentScore]);
        });
      });

      describe("when playerScore is '30'", () => {
        const playerScore = '30';

        it("should return '40' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['40', opponnentScore]);
        });
      });

      describe("when playerScore is '40'", () => {
        const playerScore = '40';

        it("should return 'win' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['win', opponnentScore]);
        });
      });
    });

    describe("when the opponnent's score is 40", () => {
      const opponnentScore = '40';

      describe("when playerScore is '0'", () => {
        const playerScore = '0';

        it("should return '15' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['15', opponnentScore]);
        });
      });

      describe("when playerScore is '15'", () => {
        const playerScore = '15';

        it("should return '30' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['30', opponnentScore]);
        });
      });

      describe("when playerScore is '30'", () => {
        const playerScore = '30';

        it("should return '40' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['40', opponnentScore]);
        });
      });

      describe("when playerScore is '40'", () => {
        const playerScore = '40';

        it("should return 'advantage' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['advantage', opponnentScore]);
        });
      });

      describe("when playerScore is 'advantage'", () => {
        const playerScore = 'advantage';

        it("should return 'win' for the player", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['win', opponnentScore]);
        });
      });
    });

    describe("when the opponnent's score is 'advantage'", () => {
      const opponnentScore = 'advantage';

      describe("when player score is 40", () => {
        const playerScore = '40';

        it("should return ['40', '40']", () => {
          expect(increaseGameScore(playerScore, opponnentScore)).to.deep.equal(['40', '40']);
        });
      });
    });
  });

  describe("increaseSetScore", () => {
    describe("when player score is less than 5", () => {
      const playerScore = 4;

      it("should increment the score by 1", () => {
        const opponnentScore = 6;

        expect(increaseSetScore(playerScore, opponnentScore)).to.equal(playerScore + 1);
      });
    });

    describe("when player score is 5", () => {
      const playerScore = 5;
      
      describe("when opponnent score is less than 5", () => {
        const opponnentScore = 4;

        it("should return 'win'", () => {
          expect(increaseSetScore(playerScore, opponnentScore)).to.equal("win");
        });
      });

      describe("when opponnent at least 5", () => {
        const opponnentScore = 5;

        it("should increment the score by 1", () => {
          expect(increaseSetScore(playerScore, opponnentScore)).to.equal(playerScore + 1);
        });
      });
    });
    
    describe("when player score is 6", () => {
      const playerScore = 6;
      
      it("should return 'win'", () => {
        const opponnentScore = 6;
        expect(increaseSetScore(playerScore, opponnentScore)).to.equal("win");
      });
    });
  });
});