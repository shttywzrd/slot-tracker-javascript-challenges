const chai = require('chai');

chai.use(require('chai-sorted'));

const loadPosts = require('../challenges/rest');

const expect = chai.expect;

describe('REST', () => {
  it('should return a promise', () => {
    const postsPromise = loadPosts();

    expect(postsPromise).to.be.instanceOf(Promise);
  });

  it('should return a promise with an array of posts', async () => {
    const posts = await loadPosts();

    expect(Array.isArray(posts)).to.be.true;
    expect(posts.length).to.be.greaterThan(0);

    posts.forEach((post) => {
      expect(post).to.be.instanceOf(Object);
      expect(post).to.have.ownProperty('id');
      expect(post).to.have.ownProperty('userId');
      expect(post).to.have.ownProperty('title');
      expect(post).to.have.ownProperty('body');
    });
  });

  it('should return a promise with an array of posts alphabetically sorted by title', async () => {
    const posts = await loadPosts();

    expect(posts).to.be.sortedBy('title');
  });
});
