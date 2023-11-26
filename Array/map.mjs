/**
 *
 * @name myMap
 * @param
 * @returns
 */

Array.prototype.myMap = function (callback) {
  const res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(callback(this[index], index, this));
  }
  return res;
};

const res = [1, 2, 3, 4, 5, 6, 7, 8, 9].myMap((ele, index, arr) => {
  return ele * 2;
});
console.log(res);
