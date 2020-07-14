
/**
 *A function that returns the symmetric difference of two sets.
 * @param {object}
 * @param {object}
 * @returns {object}
 */

function symmetricDifference(setA, setB) {
    let res = new Set();
    for (let value of setA.values()) {
      if (!setB.has(value)) {
        res.add(value);
      }
    }
    for (let value of setB.values()) {
      if (!setA.has(value)) {
        res.add(value);
      }
    }
    return res;
  }
  
  
  // Examples
  let setA = new Set([1, 2, 3, 4])
  let setB = new Set([2, 3])
  let setC = new Set([3, 4, 5, 6])
  
  console.log(symmetricDifference(setA, setC)); // => Set [1, 2, 5, 6]
  
  