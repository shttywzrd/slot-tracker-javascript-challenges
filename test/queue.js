const { expect } = require('chai');
const Queue = require('../challenges/queue');

describe('Queue', () => {
    let queue = new Queue();

    it('should have .size() method', () => {
        expect(queue.size).to.not.be.undefined;
    });

    it('should have .add() method', () => {
        expect(queue.add).to.not.be.undefined;
    });

    it('should have .get() method', () => {
        expect(queue.get).to.not.be.undefined;
    });

    it('initial queue size should be 0', () => {
        expect(queue.size()).to.equal(0);
    });

    it('should add an item to the queue', () => {
        queue.add('item');

        expect(queue.size()).to.equal(1);
    });

    it('should get item from the queue', () => {
        const item = queue.get();

        expect(item).to.equal('item');
        expect(queue.size()).to.equal(0);
    });

    it('should return items in the same order as they were added', () => {
        queue.add('item1');
        queue.add('item2');
        queue.add('item3');

        expect(queue.size()).to.equal(3);

        expect(queue.get()).to.equal('item1');
        expect(queue.get()).to.equal('item2');
        expect(queue.get()).to.equal('item3');

        expect(queue.size()).to.equal(0);
    });

    it('queues should not share items', () => {
        queue.add('item');

        expect(queue.size()).to.equal(1);

        queue = new Queue();

        expect(queue.size()).to.equal(0);
    });

    it ('should return null if there are no items in the queue', () => {
        expect(queue.get()).to.be.null;
    })
});
