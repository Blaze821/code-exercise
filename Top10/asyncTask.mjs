export const asyncTask = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${timeout}`);
    }, timeout);
  });
};
