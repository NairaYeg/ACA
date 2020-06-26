// fill()
const makeAllElementSame = (arr, staticValue) => {
  for (let elem of arr) {
    arr[arr.indexOf(elem)] = staticValue;
  }
  return arr;
};

console.log(makeAllElementSame(["Elon", "Musk", "Company", "Xcom"], "Jeff")); //["Jeff", "Jeff", "Jeff", "Jeff"]