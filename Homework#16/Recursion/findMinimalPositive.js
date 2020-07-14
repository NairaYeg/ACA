/**
 * Find a minimal positive element of the array (if such element does not exist, return -1).
 * @param {array}
 * @returns {number} - minimal positive element of the array 
 */

function findMinPositive(arr) {
  let sortedArr = [...arr].sort(function (a, b) {
    return a - b;
  });

  if (sortedArr.length === 0) {
    return -1;
  }

  let [min, ...rest] = sortedArr;

  if (min < 0) {

    return findMinPositive(rest);

  }
  return min;
}

console.log(findMinPositive([56, -9, 87, -23, 0, -105, 55, 1])); // 0

console.log(findMinPositive([45, -9, 15, 5, -78])); // 5

console.log(findMinPositive([-5, -9, -111, -1000, -7])); // -1

 
