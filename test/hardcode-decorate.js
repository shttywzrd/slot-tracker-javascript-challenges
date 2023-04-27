const { expect } = require('chai');
const hardcodeDecorate = require('../challenges/hardcode-decorate');

describe('Hardcode decorate', () => {
    const sum = (...params) => {
        return params.reduce((sum, item) => sum += item);
    }

    it('should hardcode passed function with provided parameters', () => {
        const sumTwoPlusTwo = hardcodeDecorate(sum, [2, 2]);
        const sumFourPlusFour = hardcodeDecorate(sum, [4, 4]);

        expect(sumTwoPlusTwo()).to.equal(4);
        expect(sumFourPlusFour()).to.equal(8);
    });

    it('should work with any number of parameters', () => {
        const array = new Array(100).fill(1);

        const sumOfHundread = hardcodeDecorate(sum, array);

        expect(sumOfHundread()).to.equal(100);
    });
});
