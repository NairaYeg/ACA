let users = [
  {
    name: "Elon",
    surname: "Musk",
    age: 49,
  },
  {
    name: "Stive",
    surname: "Jobs",
    age: 65,
  },
  {
    name: "Jeff",
    surname: "Bezos",
    age: 56,
  },
];

// core function
function myReduce(arr, fn, initialValue) {
  if (arr.length === 1 && initialValue === undefined) {
    return arr[0];
  }
  if (arr.length === 0 && initialValue !== undefined) {
    return initialValue;
  }

  let acc = initialValue !== undefined ? initialValue : arr[0];
  if (acc === initialValue) {
    for (let i = 0; i < arr.length; i++) {
      acc = fn(acc, arr[i], i, arr);
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      acc = fn(acc, arr[i], i, arr);
    }
  }
  return acc;
}



// callback function
function sumAge(acc, user, index, array) {
  acc.sum = acc.sum + user.age;
  return acc;
}


console.log(
  myReduce(users, sumAge, {
    sum: 0,
  })
); // { sum: 170 }
