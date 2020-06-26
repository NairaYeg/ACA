let users = [
  {
    name: "Elon",
    surname: "Musk",
    age: 49,
    jobIsEngineer: true,
  },
  {
    name: "Stive",
    surname: "Jobs",
    age: 65,
    jobIsEngineer: false,
  },
  {
    name: "Jeff",
    surname: "Bezos",
    age: 56,
    jobIsEngineer: false,
  },
];

//core function
function myMap(arr, fn) {
  if (arr.length < 1) {
    return arr;
  } else {
    let mapResult = [];
    for (let i = 0; i < arr.length; i++) {
      mapResult.push(fn(arr[i], i, arr));
    }
    return mapResult;
  }
}


// callback function
function addMr(user, index, arr) {
  return `Mr.` + ` ` + user.surename;
}


//callback function
function getBirthYear(user, index, arr) {
  return new Date().getFullYear() - user.age;
}


//callback function
function multAgeByTwo(user, index, arr) {
  return user.age * 2;
}


console.log(myMap(users, addMr)); //[ 'Mr. Musk', 'Mr. Jobs', 'Mr. Bezos' ]
console.log(myMap(users, getBirthYear)); //[ 1971, 1955, 1964 ]
console.log(myMap(users, multAgeByTwo)); //[ 96, 96, 112 ]
