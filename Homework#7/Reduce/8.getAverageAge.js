const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
   {
    username: "Elon Musk",
    lang: "ENG",
    age: 49,
  },

];


function getAverageAge() {
  return (users.reduce((acc, user) => user.age += acc, 0)/users.length);
}

console.log(getAverageAge(users)); // 53
