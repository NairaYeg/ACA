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


function getUsernameLengths() {
  return users.map((user) => user.username.length);
}

console.log(getUsernameLengths(users)); //[ 12, 13 ]



//second solution
// const getUsernameLengths = users.map((user) => user.username.length);

// console.log(getUsernameLengths);//[ 12, 13 ]
