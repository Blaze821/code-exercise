/**
 *
 * @name myFalt
 * @param number
 * @returns
 */
Array.prototype.myFalt = function (deep = 1) {
    if ((deep = 0)) {
      return this;
    }
    let res = [];
  
    this.forEach((item, i) => {
      if (Array.isArray(item)) {
        res.push(...item.myFalt(deep--));
      } else {
        res.push(item);
      }
    });
    return res;
  };
  
  // console.log([1, [2, [3, [4]]]].myFalt(3));