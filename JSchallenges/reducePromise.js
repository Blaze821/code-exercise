const executePromisesSequentially = (promises) => {
  return promises.reduce((chain, currentPromise) => {
    return chain.then((result) => currentPromise().then((currentResult) => [...result, currentResult]));
  }, Promise.resolve([]));
};

// 例子
const promise1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 500));
const promise3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 800));

const promisesArray = [promise1, promise2, promise3];

executePromisesSequentially(promisesArray)
  .then((results) => {
    console.log("All promises executed:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
