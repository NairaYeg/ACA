const removeByLetter = (arr, letter) => {
  let res = [];
  let uprCaseLetter = letter.toUpperCase();
  for (let items of arr) {
    let tmp = items.slice();
    if (tmp[0] !== uprCaseLetter) {
      res.push(items);
    }
  }
  return res;
};

let letter = "W";
const arr = ["Godfather", "Whiplash", "Social Network"];
console.log(removeByLetter(arr, letter)); //[ 'Godfather', 'Social Network' ]
