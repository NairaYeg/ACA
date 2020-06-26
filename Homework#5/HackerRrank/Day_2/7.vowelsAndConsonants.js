// Loops
const vowelsAndConsonants = (string) => {
  let vowelsArr = [];
  let consonantsArr = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === "a" ||
      string.charAt(i) === "e" ||
      string.charAt(i) === "i" ||
      string.charAt(i) === "o" ||
      string.charAt(i) === "u"
    ) {
      vowelsArr.push(string.charAt(i));
    } else {
      consonantsArr.push(string.charAt(i));
    }
  }

  for (let k = 0; k < vowelsArr.length; k++) {
    console.log(vowelsArr[k]);
  }
  for (let n = 0; n < consonantsArr.length; n++) {
    console.log(consonantsArr[n]);
  }
};

let string = "Hello world"; //
vowelsAndConsonants(string);
