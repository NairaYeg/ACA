//slice()
const getToSlice = (arr, from, to) => {
  let res = [];
  for (let item of arr) {
    let caunt = res.length;
    if (from <= arr.indexOf(item) && arr.indexOf(item) < to) {
      res[Number(caunt)] = item;
      caunt++;
    }
  }

  return res;
};

console.log(getToSlice(["Banana", "Orange", "Lemon", "Apple", "Mango"], 1, 3)); //["Orange", "Lemon"]