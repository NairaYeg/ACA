// without using any methods or converting number to string
const centuryFromYear = (year) => {
  if (year >= 1 && year <= 2020) {
    if (year % 100 !== 0) {
      let century = Math.ceil(year/100);
      return century;
    }
    if (year % 100 === 0) {
      return year / 100;
    }
  } else {
    return "Error,  please give a positive integer ";
  }
};

console.log(centuryFromYear(2020)); // 21
console.log(centuryFromYear(-51)); // Error, please give a positive integer
