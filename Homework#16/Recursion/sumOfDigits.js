/**
 *The function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.
 * @param {number}
 * @returns {number} - the sum of numbers digit.
 */

function sumOfDigits(num) {
  let sum = 0;
  function iter(num) {
    let last = num % 10;
    sum += last;
    if (num < 10) {
      return sum;
    }
    return iter((num - last) / 10);
  }

  return iter(num) < 10 ? sum : sumOfDigits(sum);
}

console.log(sumOfDigits(999999999999)); // 9

console.log(sumOfDigits(29)); // 2

console.log(sumOfDigits(14)); // 5
