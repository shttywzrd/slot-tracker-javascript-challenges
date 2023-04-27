/**
 * Implement the hardcodeDecorate(fn, params) function that takes two arguments:
 *     - fn     - function that should be decorated
 *     - params - array of parameters
 * and returns a new function that calls fn with parameters specified in params array
 *
 *
 * Usage example:
 * ```
 * function printUserInfo(email, name) {
 *     console.log(`${name} (${email})`);
 * }
 *
 * const printPeterInfo = hardcodeDecorate('peter@mail.com', 'Peter');
 *
 * printPeterInfo(); // Peter (peter@mail.com)
 * ```
 */

function hardcodeDecorate(fn, params) {
  return function () {
    return fn.apply(this, params);
  };
}

module.exports = hardcodeDecorate;
