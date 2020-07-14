/**
 *A recursive function that rotates an array N places to the left
 * @param {array}
 * @param {number}
 * @returns {array} - rotated array
 */


function rotateArr(arr, n) {
  if (n === 0) {
    return arr;
  }
  if (n > 0) {
    arr.push(arr.shift());
    n--;
    return rotateArr(arr, n);
  }

  if (n < 0) {
    arr.unshift(arr.pop());
    n++;
    return rotateArr(arr, n);
  }
}

console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], 3));

console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
