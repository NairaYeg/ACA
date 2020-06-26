const makeSubArr = (arr) => {
  if (arr.length < 4) {
    return arr;
  } else {
    let resArr = [];
    let a = 0;
    let b = 3;
    for (let i = 0; i < Math.ceil(arr.length / 3); i++) {
      resArr[i] = arr.slice(a, b);
      a += 3;
      b += 3;
    }
    return resArr;
  }
}

console.log(makeSubArr([52, "Apple", 5, 0, 87, "USA"])); //[[52, "Apple", 5,][0, 87, "USA"]]
