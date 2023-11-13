import { asyncTask } from "./asyncTask.mjs";

Promise.allSettled = function (ccc) {
  return new Promise(function (resolve, reject) {
    // 该方法的参数需为一个可迭代对象，如数组
    if (
      ccc === null ||
      ccc === undefined ||
      typeof ccc[Symbol.iterator] !== "function"
    ) {
      throw new Error(`${params} is not a iterable object`);
    }

    let count = 0;
    const params = [...ccc];
    const results = [];

    params.forEach(function (item, index) {
      Promise.resolve(item)
        .then((res) => {
          results[index] = {
            status: "fulfilled",
            value: res,
          };
          count++;
          if (count === ccc.length) {
            resolve(results);
          }
        })
        .catch((val) => {
          results[index] = {
            status: "reject",
            value: val,
          };
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

Promise.allSettled([
  asyncTask(87),
  asyncTask(81),
  asyncTask(1000),
  asyncTask(2000),
]).then((res) => {
  console.log(res);
});
