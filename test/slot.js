const { expect } = require("chai");
const calculateResult = require("../challenges/slot");

const rounds = new Map()
  .set([0, 2, 7], 13)
  .set([4, 1, 5], 8)
  .set([1, 5, 6], 3)
  .set([7, 3, 1], 50)
  .set([6, 4, 1], 0)
  .set([2, 2, 2], 40)
  .set([1, 1, 1], 10)
  .set([4, 3, 1], 10)
  .set([1, 3, 5], 3);

describe("Slot", () => {
  rounds.forEach((result, reels) => {
    it(`The result should be ${result} for positions ${reels}`, () => {
      expect(calculateResult(...reels)).to.be.equal(result);
    });
  });
});
