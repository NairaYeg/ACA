//join()
const getToString = (arr) => {
  let res = "";
  for (let items of arr) {
    res = ` ${res}${items}, `;
  }

  return res;
};

console.log(getToString(["Elon", "Musk", "Company", "Xcom"])); //Elon, Musk, Company, Xcom