const find = (arrOfObj, key) => {
  let values = [];
  for (let i = 0; i < arrOfObj.length; i++) {
    values.push(arrOfObj[i][key]);
  }
  return values;
};

console.log(
  find(
    [
      { user: "name", age: 18 },
      { user: "elon", age: 48 },
      { user: "Sofia", age: 18 },
    ],
    "user"
  )
); // ["name", "elon", "Sofia" ]
