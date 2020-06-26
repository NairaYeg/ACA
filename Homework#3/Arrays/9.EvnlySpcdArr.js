const makeEvnlySpcdArr = (a, b, c) => {
  if (a > b) {
    let answer = "Invalid format";
    return answer;
  } else {
    let arr = [];
    let arrTail = [b];
    let i = 0;
    let item = a;
    while (item <= b) {
      arr[i] = item;
      i++;
      item += c;
    }

    return arr.concat(arrTail);
  }
};
console.log(makeEvnlySpcdArr(1, 25, 5)); //[ 1, 6, 11, 16, 21, 25 ]



