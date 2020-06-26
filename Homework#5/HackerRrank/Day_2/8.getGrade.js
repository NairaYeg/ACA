// Conditional Statements: If-Else
function getGrade(score) {
  if (0 <= score && score <= 30) {
    let grade;
    if (25 < score && score <= 30) {
      grade = "A";
    } else if (20 < score && score <= 25) {
      grade = "B";
    } else if (15 < score && score <= 20) {
      grade = "C";
    } else if (10 < score && score <= 15) {
      grade = "D";
    } else if (5 < score && score <= 10) {
      grade = "E";
    } else if (0 < score && score <= 5) {
      grade = "F";
    }
    return grade;
  } else {
    let error = new Error("not valid Input");
    return error;
  }
}

console.log(getGrade(17)); // C
console.log(getGrade(199)); // Error: not valid Input
