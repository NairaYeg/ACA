//findIndex

const findIndex = (arr, arg) => {
  let index;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arg) {
        index = i;
        return index;
      }
    }
  }
  let retValue = -1;
  if (arr.length === 0) {
    return retValue;
  }
};

console.log(findIndex(["Elon", "Musk", "Xcom"], "Xcom")); //2
console.log(findIndex([], "Xcom")); //-1
