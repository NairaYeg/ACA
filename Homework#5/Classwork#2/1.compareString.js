const compareString = (str1, str2) => {
  let resArr = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].trim().toLowerCase() === str2[i].trim().toLowerCase()) {
      resArr.push(true);
    } else {
      resArr.push(false);
    }
  }
  return resArr;
};

console.log(
  compareString(["Name", "naMe", "sofI"], ["  NaMe ", "name", "Sofia"])
); // [true, true, false];
