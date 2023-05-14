 /**
 * This algorithm is a search algorithm with a specific strategy that takes advantage of the rabbit's movement pattern. 
 * It is designed to search for an element (the rabbit) in a sequence of elements (holes) while the element's position can change after each search step.
 * 
 * The algorithm is based on the principle of narrowing down the search space by checking holes at increasing intervals, then searching sequentially in the smaller range once the rabbit has been located within a certain range.
 * 
 * The complexity of this algorithm is O(sqrt(n)), where n is the number of holes, making it more efficient than a simple linear search, which has a complexity of O(n). 
 * This efficiency is achieved by exploiting the rabbit's limited movement options, allowing the searcher to cover more ground and catch up to the rabbit more quickly.
 */

const findRabbit = (holes) => {
  const n = holes.length;
  const k = Math.floor(Math.sqrt(n));

  // Step 2: Check holes at increasing intervals of k
  const holeIndex = holes.findIndex((_, index, arr) => {
    if (index % k === 0) {
      return arr[index + k] || arr[arr.length - 1];
    }
    return false;
  });

  // Step 3: Rabbit is in one of the adjacent holes
  const startIndex = holeIndex - (k - 1);

  // Step 4: Check each hole sequentially to the right until the rabbit is found
  const rabbitHole = holes.slice(startIndex).findIndex(hole => hole) + startIndex;

  return rabbitHole;
};

// Example usage
const holes = new Array(100).fill(false);
const rabbitHole = Math.floor(Math.random() * 100);
holes[rabbitHole] = true;

const foundRabbitHole = findRabbit(holes);
console.log(`Rabbit found in hole ${foundRabbitHole}`);
