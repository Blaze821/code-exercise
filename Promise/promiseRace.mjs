import { asyncTask } from "./asyncTask.mjs";

Promise.race = function (params, callback) {
  return new Promise(function (resolve, reject) {
    if (
      params == undefined ||
      params == null ||
      typeof params[Symbol.iterator] !== "function"
    ) {
      throw new Error("params is not a iterable object");
    }

    for (const i of params) {
      Promise.resolve(i).then(resolve, reject);
    }
  });
};

Promise.race([asyncTask(1000), asyncTask(2000), asyncTask(3000)]).then(
  (res) => {
    console.log(res);
  }
);
