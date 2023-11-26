/**
 *
 * @name myReduce
 * @param
 * @returns
 */
Array.prototype.myReduce = function (callback, initValue) {
  let res = initValue === undefined ? this[0] : initValue;
  for (let i = 0; i < this.length; i++) {
    res = callback(res, this[i], this);
  }
  return res;
};
