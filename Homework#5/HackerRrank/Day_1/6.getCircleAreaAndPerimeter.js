//Let and Const
const getAreaAndPerimeter = (r) => {
  if (0 < r && r <= 100) {
    const PI = Math.PI;
    let area = PI * r * r;
    console.log(area);

    let perimeter = 2 * PI * r;
    console.log(perimeter);
  } else {
    let error = new Error("Not valid Input");
    console.log(error);
  }
};

getAreaAndPerimeter(1000); //Error: Not valid Input
