function parseInteger(arr) {
  return arr.map((item) => (parseInt(item, 10) ? parseInt(item, 10) : null));
}

console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];
