const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNames() {
  return users.map((user) => user.username);
}

console.log(getUserNames(users)); //[ 'Yuri Gagarin', 'Nil Armstrong' ]





// second solution 
// const getUserNames = users.map((user) => user.username);

// console.log(getUserNames); // ['Yuri Gagarin', 'Nil Armstrong']
