// Functions
const countFactorial = (n) => {
  let counter = 1;
  if (1 <= n && n <= 10) {
    for (let i = 1; i <= n; i++) {
      counter *= i;
    }
    return counter;
  } else {
    let error = new Error("n cannot be greater than 10 and less than 1");
    return error;
  }
};

console.log(countFactorial(4)); // 24
console.log(countFactorial(0)); // Error: n cannot be greater than 10 and less than 1

