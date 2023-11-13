Promise.all = function (promises) {
  let count = 0,
    arr = [];
  return new MyPromise((resolve, reject) => {
    promises.forEach((item, i) => {
        Promise.resolve(item).then(res => {
            arr[i] = res
            count += 1
            if(count === promises.length){
                resolve(arr)
            }
            reject()
        })
    })
  });
};
