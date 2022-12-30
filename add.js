const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};
// console.log(add(10, 90));
// console.log(add(10, -90));
// console.log(add(10, -99999999));

module.exports = {
  add: add,
  subtract: subtract,
};
