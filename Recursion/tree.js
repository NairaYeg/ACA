/**
 *A recursive function returns array all  linked list values.
 * @param {object}
 * @returns {array}
 */

function printValues(tree) {
  let res = [];
  function iter(tree) {
    let tmp = tree;
    if (tmp) {
      res.push(tmp.value);
      tmp = tmp.next;
      return iter(tmp);
    }
    return res;
  }
  return iter(tree);
}

const tree = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: -10,
        next: null,
      },
    },
  },
};

console.log(printValues(tree)); // [12, 20, 30, -10]
