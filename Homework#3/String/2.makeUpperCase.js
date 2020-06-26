const makeUpperCase = (text, numb) => {
  if (numb > text.length + 1) {
    console.log("Error");
  } else {
    let tmp = text[numb].toUpperCase();
    let res = text.replace(text[numb], tmp);
    return res;
  }
};

console.log(makeUpperCase("xcom", 0));//Xcom

