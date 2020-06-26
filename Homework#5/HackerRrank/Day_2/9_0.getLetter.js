// Without using Conditional Statement Switch
const getLetter = (string) => {
  let letter;
  let firstChar = string.charAt(0);
  let a = "aeiou";
  let b = "bcdfj";
  let c = "hjklm";

  if (a.includes(`${firstChar}`.toLowerCase()) === true) {
    letter = "A";
  } else if (b.includes(`${firstChar}`.toLowerCase()) === true) {
    letter = "B";
  } else if (c.includes(`${firstChar}`.toLocaleLowerCase()) === true) {
    letter = "C";
  } else {
    letter = "D";
  }
  return letter;
};

console.log(getLetter("FJKScscbna")); // B
