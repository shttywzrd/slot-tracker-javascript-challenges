const fetch = require('node-fetch');

/**
 * Implement the loadPosts() function that returns a Promise with posts
 * loaded from https://jsonplaceholder.typicode.com/posts and alphabetically sorted by title
 *
 *
 * Usage example:
 * ```
 * loadPosts().then(posts => {
 *      console.log(posts); // [{ title: ... } ...]
 * });
 * ```
 */

async function loadPosts() {
  // Here i use fetch to make a GET request.
  // I made this function 'async' so that it returns a Promise and so i can call 'await' keyword to wait for fetch() and json() to complete
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // Here i use Array.sort() method to sort the posts alphabetically by their title
  // parameters 'a', 'b' represent two posts being compared
  const sorted = data.sort((a, b) => {
    // here i use the lowercase versions of titles in case they contain uppercase letters
    // that could interfere with them sorting properly
    const A = a.title.toLowerCase();
    const B = b.title.toLowerCase();

    // using simple string comparison returning 1, -1 or 0 to indicate the order of 'a' and 'b' posts
    if (A > B) return 1;
    if (A < B) return -1;
    return 0;
  });
  return sorted;
}

module.exports = loadPosts;
