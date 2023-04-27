/**
 * You are working in a casino and are tasked with developing a classic slot game machine.
 *
 * Considering a slot machine with three rows and three vertical reels defined like this:
 * Reel1: ['cherry', 'lemon', 'apple',  'lemon', 'banana', 'banana', 'lemon', 'lemon']
 * Reel2: ['lemon', 'apple',  'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
 * Reel3: ['lemon', 'apple',  'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
 *
 * Using these reels, complete the calculateResult function so that, when it's called, it gives back the result of a spin.
 * The calculateResult function takes 3 arguments, each specifying a stopping position for the corresponding reel.
 * The stopping positions describe the array index of the first symbol shown in each column. Since the machine shows
 * three rows of each reel, given a stopping position i, the reel will show symbols i, i+1, and i+2.
 *
 * 3 Cherries in a row: won 50 coins
 * 2 Cherries in a row: won 40 coins
 * 3 Apples in a row: won 20 coins
 * 2 Apples in a row: won 10 coins
 * 3 Bananas in a row: won 15 coins
 * 2 Bananas in a row: won 5 coins
 * 3 Lemons in a row: won 3 coins
 *
 *
 *   Example:
 *    Given the stopping positions (0, 2, 7), the slot machine would look like this:
 *
 *       Reel1      Reel2     Reel3
 *    --------------------------------
 *    |  cherry  |  lemon  |  lemon  |
 *    |  lemon   |  lemon  |  lemon  |
 *    |  apple   |  cherry |  apple  |
 *    --------------------------------
 *
 *   The machine shows three lemons in the second row (gives 3 coins) and two apples in the third row (gives 10 coins).
 *   Therefore the total win amount is 13.
 *
 */

function getRotatedReel(reel, rotations) {
  const reelCopy = [...reel]; // make a copy of the original array

  // Rotate the elements of the copied array `rotations` times.
  for (let i = 0; i < rotations; i++) {
    reelCopy.push(reelCopy.shift()); // remove the first element and add it to the end
  }

  return reelCopy; // return the rotated array
}

function calculateRow(row) {
  let coins = 0; // initialize the payout to 0

  // Use an object `counts` to keep track of the number of each type of symbol in the row.
  const counts = { cherry: 0, apple: 0, banana: 0, lemon: 0 };
  row.forEach((element) => {
    counts[element] += 1; // increment the count for the current symbol
  });

  // Check various conditions to determine the payout for the row.
  if (counts.lemon === 3) coins = 3;
  if (counts.cherry > 1) coins = 40;
  if (counts.apple > 1) coins = 10;
  if (counts.banana > 1) coins = 5;
  if (counts.cherry === 3 || counts.apple === 3 || counts.banana === 3)
    coins += 10;

  // return the payout for the row
  return coins;
}

function calculateResult(position1, position2, position3) {
  reels = {
    Reel1: [
      'cherry',
      'lemon',
      'apple',
      'lemon',
      'banana',
      'banana',
      'lemon',
      'lemon',
    ],
    Reel2: [
      'lemon',
      'apple',
      'lemon',
      'lemon',
      'cherry',
      'apple',
      'banana',
      'lemon',
    ],
    Reel3: [
      'lemon',
      'apple',
      'lemon',
      'apple',
      'cherry',
      'lemon',
      'banana',
      'lemon',
    ],
  };

  // Rotate each reel array according to the given positions.
  const rotatedReel1 = getRotatedReel(reels.Reel1, position1);
  const rotatedReel2 = getRotatedReel(reels.Reel2, position2);
  const rotatedReel3 = getRotatedReel(reels.Reel3, position3);

  // Extract the symbols from each rotated reel array to form three rows of symbols.
  const row1 = [rotatedReel1[0], rotatedReel2[0], rotatedReel3[0]];
  const row2 = [rotatedReel1[1], rotatedReel2[1], rotatedReel3[1]];
  const row3 = [rotatedReel1[2], rotatedReel2[2], rotatedReel3[2]];

  // Add three payouts together to get the total payout for the given reel positions.
  let result = calculateRow(row1) + calculateRow(row2) + calculateRow(row3);

  return result;
}

calculateResult(0, 2, 7);

module.exports = calculateResult;
