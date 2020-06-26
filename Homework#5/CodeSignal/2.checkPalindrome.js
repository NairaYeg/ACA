// const checkPalindrome = (string) => {
//   if (string.length === 0) {
//     return "Error, empty string";
//   }
//   if (string.length % 2 === 0 && (1 <= string.length <= 10^5)) {
//     //when the string length is an even number;
//     let firstHalf = string.slice(0, string.length / 2);
//     let secondHalf = string.slice(string.length / 2, string.length);
//     let tmpArr = [];
//     for (let i = 0; i < string.length / 2; i++) {
//       if (firstHalf[i] === secondHalf[secondHalf.length - 1 - i]) {
//         tmpArr.push(firstHalf[i]);
//       }
//     }
//     if (tmpArr.length === string.length / 2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   if (string.length % 2 !== 0 && (1 <= string.length <= 10^5)) {
//     //when the string length is an odd number;
//     let firstHalf = string.slice(0, (string.length - 1) / 2);
//     let secondHalf = string.slice((string.length + 1) / 2, string.length);
//     let tmpArr = [];
//     for (let i = 0; i < (string.length - 1) / 2; i++) {
//       if (firstHalf[i] === secondHalf[secondHalf.length - 1 - i]) {
//         tmpArr.push(firstHalf[i]);
//       }
//     }
//     if (tmpArr.length === (string.length - 1) / 2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

function checkPalindrome(inputString) {
  const reversed = inputString.split("").reverse().join("");
  return inputString === reversed;
}

console.log(checkPalindrome("decaf 1 faced")) // true
console.log(checkPalindrome('1228ds221')) // false
console.log(checkPalindrome("")) // "Error, empty string"
