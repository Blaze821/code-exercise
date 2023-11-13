/**
 *
 * @name myFalt
 * @param number
 * @returns
 */
// Array.prototype.myFalt = function (deep = 1) {
//   if ((deep = 0)) {
//     return this;
//   }
//   let res = [];

//   this.forEach((item, i) => {
//     if (Array.isArray(item)) {
//       res.push(...item.myFalt(deep--));
//     } else {
//       res.push(item);
//     }
//   });
//   return res;
// };

// console.log([1, [2, [3, [4]]]].myFalt(3));


/**
 *
 * @name myReduce
 * @param 
 * @returns
 */
// Array.prototype.myReduce = function (callback, initValue) {
//   let res = initValue === undefined ? this[0] : initValue;
//   for (let i = 0; i < this.length; i++) {
//     res = callback(res, this[i], this);
//   }
//   return res;
// };

/**
 *
 * @name myMap
 * @param 
 * @returns
 */

Array.prototype.myMap = function (callback){
    const res = [];
    for (let index = 0; index < this.length; index++) {
        res.push(callback(this[index], index, this))
    }
    return res;
}


const res = [1,2,3,4,5,6,7,8,9].myMap((ele, index, arr) => {
    return ele * 2
})
console.log(res)
