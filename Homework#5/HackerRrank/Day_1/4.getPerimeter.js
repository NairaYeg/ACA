// Arithmetic Operators

function getPerimeter(length, width) {
  if (1 <= length && length <= 1000 && 1 <= width && width <= 1000) {
    let perimeter = 2 * (length + width);
    return perimeter;
  }
  let error = new Error("Not valid input");
  return error;
}

console.log(getPerimeter(5, 10)); // 30
console.log(getPerimeter(0, 10)); // Error:
