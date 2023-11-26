const obj = {
  a: {
    b: 123,
  },
  arr: [
    {
      demo: "demo",
    },
  ],
};
function _get(obj, path, defaultValue = "undefined") {
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }

  return (
    newPath.reduce((o, k) => {
      return (o || {})[k];
    }, obj) || defaultValue
  );
}
console.log(_get(obj, "a.b"));
console.log(_get(obj, "arr[0].demo"));


