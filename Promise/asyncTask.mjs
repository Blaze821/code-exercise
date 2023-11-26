export const asyncTask = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${timeout}`);
    }, timeout);
  });
};

// new Promise((resolve) => {
//   console.log(1);
//   new Promise((resolve, reject) => {
//     console.log(2);
//     setTimeout(() => {
//       resolve(3)
//       console.log(4);
//     })
//   }).then((data) => {
//     setTimeout(() => {
//       console.log(5);
//     })
//     console.log(data,'then2');
//   })
//   setTimeout(() => {
//     // console.log(6);
//     resolve(6)
//     console.log(7);
//   })
// }).then(data => {
//   console.log(data,'then1');
//   setTimeout(() => {
//     console.log(8);
//   })
//   console.log(9);
// })
// let a = asyncTask()
// console.log(a == 1 && a == 2);
