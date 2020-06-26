

const combTwoDigit = (firstDigit, seconDigit) => {
  if (isNaN(firstDigit) === true || isNaN(seconDigit) === true) {
    console.log("not valide input"); 
  } else if (firstDigit === seconDigit) {
    let res1 = `${String(seconDigit) + firstDigit}`;
    return res1;
  } else {
    let res2 = `${String(firstDigit) + seconDigit},${
      String(firstDigit) + firstDigit
    },${String(seconDigit) + seconDigit},${String(seconDigit) + firstDigit}`;
    return res2;
  }
};

console.log(combTwoDigit(1, 2)); //12,11,22,21