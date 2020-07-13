/**
 * Find the index where sorting order is violated..
 * @param {array}
 * @returns {number} - index of the item the  sorting order is violated
 */

function findViolatorIndex(arr) {
  let tmp = [...arr];
  function iter(tmp) {
    let [first, ...rest] = tmp;
    if (first <= rest[0]) {
      return iter(rest);
    }

    return rest[0];
  }

  return arr.indexOf(iter(tmp));
}

console.log(findViolatorIndex([-9, -4, -4, 3, 12, 4, 5])); //5

console.log(findViolatorIndex([2, 12, 15, 48, 64])); // -1
