/**
 *A recursive function determines whether all digits of the number are odd or not.
 * @param {number}
 * @returns {Boolean}
 */

function isAllDigitsOdd(numb) {
  let last = numb % 10;
  if (numb < 10 && numb % 2 !== 0) {
    return true;
  }
  if (last % 2 === 0) {
    return false;
  }
  let rest = (numb - (numb % 10)) / 10;
  return isAllDigitsOdd(rest);
}

console.log(isAllDigitsOdd(2111330)); //false

console.log(isAllDigitsOdd(7791)); //true

console.log(isAllDigitsOdd(5)); //true
