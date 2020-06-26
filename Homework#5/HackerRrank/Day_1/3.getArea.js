// Arithmetic Operators

function getArea(length, width) {
  if (1 <= length && length <= 1000 && 1 <= width && width <= 1000) {
    let area = length.toFixed(3) * width.toFixed(3);

    return area;
  }
  let error = new Error("Not valid input");
  return error;
}

console.log(getArea(2, 8)); // 16
console.log(getArea(2, 0)); // Error:
