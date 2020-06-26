// Hello, World !
function greeting() {
  let a = "Hello, World!";
  let result = `${a}\n` + `${parameterVariable}`;
  return result;
}

let parameterVariable = "HackerRank is the best!";

console.log(greeting(parameterVariable));
