/**
 * @name myApply
 * @param {*} context
 * @param  {any} args
 * @returns
 */

Function.prototype.myApply = function (context, args) {
  // 判断调用myApply的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myApply - 被调用的对象必须是函数");
  }

  // 判断传入的参数是否为数组
  if (args && !Array.isArray(args)) {
    throw new TypeError("Function.prototype.myApply - 第二个参数必须是数组");
  }

  context = context || globalThis;

  // 用Symbol来创建唯一的fn，防止名字冲突
  let fn = Symbol("key");

  // this是调用myApply的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this;

  // 传入myApply的多个参数
  const result = Array.isArray(args) ? context[fn](...args) : context[fn]();

  // 将增加的fn方法删除
  delete context[fn];

  return result;
};

/*const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.myApply(array, elements);
console.log("myApply", array);
console.log("myApply", Math.max.myApply(null, elements));
console.log("apply", Math.max.apply(null, elements));
console.dir(Function.prototype.apply, "apply");*/

/**
 *
 *  @name myCall
 * @param {*} context
 * @param  {...any} args
 * @returns
 */
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  let fn = Symbol("key");
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

const test = {
  name: "xxx",
  hello: function () {
    console.log(`hello,${this.name}!`);
  },
  add: function (a, b) {
    return a + b;
  },
};
// const obj = { name: "world" };
// test.hello.myCall(obj); //hello,world!
// test.hello.call(obj);//hello,world!
// console.log(test.add.myCall(null, 1, 2));//3
// console.log(test.add.call(null, 1, 2));//3

/**
 *
 *  @name myBind
 * @param {*} context
 * @param  {...any} ...args
 * @returns
 */
Function.prototype.myBind = function (context, ...args) {
  context = context || globalThis;
  const _this = this;
  return function fn(...innerArgs) {
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs);
    }
    return _this.apply(context, [...innerArgs, ...args]);
  };
};

// const obj = { name: "world" };
// let hello1 = test.hello.myBind(obj, 1);
// let hello2 = test.hello.bind(obj, 1);
// hello1(2, 3); //hello,world! 6
// hello2(2, 3); //hello,world! 6
// console.log(new hello1(2, 3));
//hello,undefined! 6
// hello {}
// console.log(new hello2(2, 3));
//hello,undefined! 6
// hello {}

// 参考https://juejin.cn/post/7268096685199327273?searchId=20231113204508BB8D0AC081780169C4EA#heading-7
