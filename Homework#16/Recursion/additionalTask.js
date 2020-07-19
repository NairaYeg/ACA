/**
 *A recursive function returns array all  linked list values.
 * @param {object}
 * @returns {array}
 */

function printValues(tree) {
  let res = [];
  function iter(tree) {
    if (tree) {
      res.push(tree.value);
      tree = tree.next;
      return iter(tree);
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
