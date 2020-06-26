// return the obj size
const retSizeOfObj = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  if (arr.length == 0) {
    return "Empty";
  }

  return arr.length;
};

console.log(retSizeOfObj({})); // "Empty" ;
console.log(retSizeOfObj({ a: 1, b: 5, c: "hjsdh" })); // 3





// We did the second and third tasks in practice