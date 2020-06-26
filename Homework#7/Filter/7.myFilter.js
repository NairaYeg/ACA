let users = [
  {
    name: "Elon",
    surname: "Musk",
    age: 49,
    jobIsEnginer: true,
  },
  {
    name: "Stive",
    surname: "Jobs",
    age: 65,
    jobIsEnginer: false,
  },
  {
    name: "Jeff",
    surname: "Bezos",
    age: 56,
    jobIsEnginer: false,
  },
];

//core function
function myFilter(arr, fn) {
  if (arr.length < 1) {
    return arr;
  } else {
    let filterResult = [];

    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        filterResult.push(arr[i]);
      }
    }
    return filterResult;
  }
}


//callback function

function filterByAge(user, index, arr) {
  if (user.age > 50) {
    return true;
  }
  return false;
}


//callback function

function filterByBirthYear(user, index, arr) {
  let birthYear = new Date().getFullYear() - user.age;
  if (birthYear > 1960) {
    return true;
  }

  return false;
}


console.log(myFilter(users, filterByAge)); //
console.log(myFilter(users, filterByBirthYear)); //
