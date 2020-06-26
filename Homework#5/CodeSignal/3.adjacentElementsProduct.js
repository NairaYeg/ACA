const adjacentElementsProduct = (inputArray) => {
  let result = Number.MIN_SAFE_INTEGER;
  let firstElement;
  let secondElement;
  for (let i = 0; i < inputArray.length; i++) {
    firstElement = inputArray[i];
    secondElement = inputArray[i + 1];
    if (firstElement * secondElement > result) {
      result = firstElement * secondElement;
    }
  }
  return result;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21 ;
