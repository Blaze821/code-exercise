// // async function async1() {
// //     console.log('async1 start');
// //     await async2();
// //     console.log('async1 end');
// //   }
  
// // async function async2() {
// //     console.log('async2');
// //   }
  
// //   console.log('script start');
  
// //   setTimeout(function() {
// //       console.log('setTimeout');
// //   }, 0);  
  
// //   async1();
  
// //   new Promise(function(resolve, reject){
// //     console.log('promise 1');
// //     reject();
// //   }).then(function(){
// //     console.log('promise 2');
// //   }).catch(function(){
// //     console.log('promise 3');
// //   }).then(function(){
// //     console.log('promise 4');
// //   });
  
// //   console.log('script end');

// // script start,async1 start,async2,promise 1,script end,async1 end,promise 3,promise 4,setTimeout



// //   var length = 10;
// // function fn() {
// //   return this.length+1;
// // }
// // var obj = {
// //   length: 5,
// //   test1: function() {
// // /// 研究
// //     return fn();
// //   },
// //   test2 : null
// // };
// // obj.test2=fn;

// // //下面代码输出是什么
// // console.log(obj.test1()) //NaN



// // console.log(fn(), obj.test2())
// // // NaN,6




// // -------------------
// class User {
  
//     printName(name) {
//       this.print(name);
//     }
//     print(name) {
//       console.log(name);
//     }
//   }
//   const user = new User();
  
//   const { printName } = user;
  
  
//   user.printName('user');
//   printName('user');

const { useState, useEffect } = require("react");

const TestSetState = () => {
  const [count, setCount] = useState(0);

  console.log("count:", count);


const a = () => {
    setCount(1);
          setCount(2);
}

//   useEffect(() => {
//    const ele = document.getElementById("test");
//     ele.addEventListener("click", () => {
//       setCount(1);
//       setCount(2);
//      });
//   }, []);

  return (
    <div id="test" onclick={a}>
      {count}
    </div>
  );
};

export default TestSetState;
