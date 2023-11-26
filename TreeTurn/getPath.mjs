const obj = {
  ee: "ee",
  a: {
    b: {
      c: {
        d: "d",
        dd: "dd",
      },
    },
  },
  a1: {
    b1: {
      c1: {
        d1: "d1",
      },
    },
  },
};

function getPath(obj, value) {
  const path = [];
  let res = [];

  const traverse = (obj) => {
    if (typeof obj !== "object") return;
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = obj[key];

      path.push(key);
      if (item === value) {
        res = path.slice();
        return;
      }

      traverse(item)
      path.pop()
    }
  };

  traverse(obj)
  return res;
}

console.log(getPath(obj, "dd"));
