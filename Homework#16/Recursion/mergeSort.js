/**
 *A recursive function sorted array.
 * @param {array} - unsorted array.
 * @returns {function} - a function that merges two sorted arrays and  returns one.
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}


/**
 *A function that merges two array.
 * @param {array} -sorted array.
 * @param {array} - sorted array.
 * @returns {array} - merge of two arrays, that gave like an argument.
 */

function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    }
    res.push(right.shift());
  }
  if (left.length > 0) {
    res.push(left.shift());
  }
  if (right.length > 0) {
    res.push(right.shift());
  }
  return res;
}

console.log(mergeSort([5, 8, 9, 2, 6, 1, 3, 0]));
