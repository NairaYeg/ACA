//includes()
const checkForInclusion = (arr, element) => {
  for (let item of arr) {
    if (item == element) {
      return true;
    }
  }
  return false;
};

console.log(checkForInclusion([0, 52, 45, 85, 985, 63], 1)); // false

