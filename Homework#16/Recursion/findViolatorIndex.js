/**
 * Find the index where sorting order is violated..
 * @param {array}
 * @returns {number} - index of the item the  sorting order is violated
 */

function findViolatorIndex(arr) {
  function iter(tmp, idx) {
    let [first, ...rest] = tmp;

    if (arr.length === idx + 1) {
      return -1;
    }

    if (first > rest[0]) {
      return idx + 1;
    }
    return iter(rest, (idx += 1));
  }

  return iter(arr, 0);
}

console.log(findViolatorIndex([-9, -4, -4, 3, 12, 4, 5])); //5

console.log(findViolatorIndex([2, 12, 15, 48, 64])); // -1
