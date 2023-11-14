function deepCopy(target, map = new Map()) {
  if (map.get(target)) {
    return map.get(target);
  }
  const result = Array.isArray(target) ? [] : {};
  map.set(target, true);
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      result[key] = deepCopy(target[key], map);
    }
  }
}
