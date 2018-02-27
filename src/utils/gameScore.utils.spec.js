const {expect} = require("chai");

const {increaseScore} = require("./gameScore.utils");

describe("gameScore utils", () => {
  describe("increaseScore", () => {
    describe("when currentScore is '0'", () => {
      const currentScore = '0';

      it("should return '15'", () => {
        expect(increaseScore(currentScore)).to.equal('15');
      });
    });

    describe("when currentScore is '15'", () => {
      const currentScore = '15';

      it("should return '30'", () => {
        expect(increaseScore(currentScore)).to.equal('30');
      });
    });

    describe("when currentScore is '30'", () => {
      const currentScore = '30';

      it("should return '40'", () => {
        expect(increaseScore(currentScore)).to.equal('40');
      });
    });

    describe("when currentScore is '40'", () => {
      const currentScore = '40';

      it("should return 'win'", () => {
        expect(increaseScore(currentScore)).to.equal('win');
      });
    });

    describe("when currentScore is 'win'", () => {
      const currentScore = 'win';

      it("should throw an error", () => {
        const badIncrease = () => increaseScore(currentScore);
        expect(badIncrease).to.throw(Error, "The player already won the game");
      });
    });
  });
});