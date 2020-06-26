// Throw
function isPositive(a) {
  if (a > 0) {
    let answer = "YES";
    return answer;
  }
  if (a === 0) {
    throw new Error("Zero Error");
  }
  if (a < 0) {
    throw new Error("Negative Error");
  }
}
console.log(isPositive(-9)); // Error: Negative Error
console.log(isPositive(0)); // Error: Zero Error
console.log(isPositive(9)); // YES


