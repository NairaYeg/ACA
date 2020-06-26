const makeArrayConsecutive2 = (statues) => {
  statues.sort(function (a, b) {
    return a - b;
  });
  let differenceOfTwoNumbers = 0;
  let counter = 0;
  if (
    1 <= statues.length &&
    statues.length <= 10 &&
    1 <= Math.min(...statues) &&
    Math.max(...statues) <= 20
  ) {
    //  Guaranteed constraints: 1 ≤ statues.length ≤ 10 , 0 ≤ statues[i] ≤ 20

    for (let i = 0; i < statues.length; i++) {
      if (statues[i + 1] - statues[i] > 1) {
        differenceOfTwoNumbers = statues[i + 1] - statues[i] - 1;
        counter += differenceOfTwoNumbers;
      }
    }
    return counter;
  }
    let error = new Error("Not valid input");
    return error;
};

console.log(makeArrayConsecutive2([6, 2, 8, 15,])); //10
console.log(makeArrayConsecutive2([])) //"Error: Not valid input"
console.log(makeArrayConsecutive2([6, 15, 85])) // "Error: Not valid input"
