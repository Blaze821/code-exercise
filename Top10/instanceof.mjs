function myInstanceof(left, right) {
    if (typeof left !== 'object') return false
    let proto = Object.getPrototypeOf(left)
    while (proto) {
      if (proto === right.prototype) {
        return true
      }
      proto = Object.getPrototypeOf(proto)
    }
    return false
  }

function Person() { };
var p = new Person();
console.log(myInstanceof(p, Object));
// console.log(p instanceof Person);//true