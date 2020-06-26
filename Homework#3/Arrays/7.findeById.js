const findByID = (frameworks, id) => {
  let noData = "No data";
  if (frameworks.length <= id || id < 0) {
    return noData;
  } else {
    return frameworks[id];
  }
};
const frameworks = [
  { id: 1, title: "react" },
  { id: 2, title: "angular" },
  { id: 3, title: "vue" },
];

console.log(findByID(frameworks, 1));//{ id: 2, title: 'angular' }
