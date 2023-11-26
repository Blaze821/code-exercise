import { asyncTask } from "./asyncTask.mjs";

Promise._all = function (params, callback) {
  return new Promise(function (resolve, reject) {
    // 该方法的参数需为一个可迭代对象，如数组
    if (
      params === undefined ||
      params === null ||
      typeof params[Symbol.iterator] !== "function"
    ) {
      throw new Error(`${params} is not a iterable object`);
    }
    let fullfillCount = 0;
    const result = [];
    params = [...params];

    if (params.length === 0) {
      return resolve(result);
    }

    params.forEach(function (item, index) {
      Promise.resolve(item).then((res) => {
        result[index] = res;
        fullfillCount++;
        if (fullfillCount === params.length) {
          resolve(result);
        }
      });
    });
  });
};

Promise._all([
  asyncTask(10),
  asyncTask(20),
  asyncTask(3000),
  asyncTask(40),
  asyncTask(50),
  asyncTask(60),
]).then((res) => {
  console.log(res);
});
