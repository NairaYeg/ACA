// Try, Catch, and Finally
function reverseString(s) {
  try {
    let reversedString = s.split("").reverse().join("");
    console.log(reversedString);
  } catch (error) {
    console.log(`${error.message}`);
  } finally {
    console.log(s);
  }
}

reverseString("12345"); // 54321 , 12345
reverseString([]); // s.split is not a function, []
