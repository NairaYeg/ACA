const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];


const filterByField = (arr, field) => {
  return users.filter((user) => user[field] === true);
};

console.log(filterByField(users, "isAstronaut")); // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]
