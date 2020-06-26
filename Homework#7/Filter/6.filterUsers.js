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

const filterUsers = () => {
  return users.filter((user) => user.lang !== "ru");
};

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]
