//without using any methods 
const getSecondLargest = (arr) => {
  const loop = arr.length;
  let arrUniqueNums = [];
  let a = arrUniqueNums.length;
  for (let i = 0; i < loop; i++) {
    for (let j = 0; j < loop; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  for (let k = 0; k < loop; k++) {
    if (arr[k] !== arr[k + 1]) {
      arrUniqueNums.push(arr[k]);
    }
  }

  return arrUniqueNums[arrUniqueNums.length - 2];
};

console.log(getSecondLargest([2, 9, 9, 7, 7, 6, -9])); // 7
