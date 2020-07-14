/**
 *A recursive function that flattens nested arrays .
 * @param {array}- nested array.
 * @returns {array} - flatter array
 */

function makeFlatten(arr) {
  let res = [];
  function iter(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        res.push(arr[i]);
      }
      iter(arr[i]);
    }
    return res;
  }
  return iter(arr);
}

console.log(makeFlatten([14, [1, [[[3, []]], 1], 0]]));

console.log(makeFlatten([1, [3, 4, [1, 2]], 10]));
