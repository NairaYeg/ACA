const filterRange = (arr, a, b) => {
  let resArr = [];
  let notValInp = "not valid input";
  if (Number.isNaN(a) === true || Number.isNaN(b) === true) {
    return notValInp;
  } else {
    for (let items of arr) {
      if (items < b && items > a) {
        resArr.push(items);
      }
    }
    return resArr;
  }
};

console.log(filterRange([-10, -8, 0, "shdja", 20], -100, "sjkajd")); //[ -10, -8, 0, 10 ] ;
