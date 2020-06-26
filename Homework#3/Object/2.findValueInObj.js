const findValue = (obj, someKey) => {
  for (let key in obj) {
    if (key === someKey) {
      return obj[key];
    }
  }
  return "The value is not found";
}

console.log(findValue({ user: "name", surname: "something" }, "user"));// name
