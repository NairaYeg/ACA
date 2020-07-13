/**
 * Removes the first element and returns the given array.
 * @param {array}
 * @returns {array} - the given array without the first element.
 */

function removeFirstElem(arr) {
  let tmp = [...arr];
  let first = tmp[0];

  if (arr.length === 0) {
    return arr;
  }

  function iter(arr) {
    arr.length = arr.unshift(arr[arr.length - 1]) - 1;

    let last = arr[arr.length - 1];

    if (last === first) {
      arr.length = arr.length - 1;

      return arr;
    }

    return iter(arr);
  }

  return iter(arr);
}




console.log(removeFirstElem([6, 78, "n", 0, 1]));

console.log(removeFirstElem([5]))

console.log(removeFirstElem([]))
