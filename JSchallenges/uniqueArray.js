function uniqueArray(arr) {
  const seen = new Set();
  return arr.filter((item) => {
    const itemType = typeof item;
    const itemValue = itemType === "object" ? JSON.stringify(item) : item;

    if (!seen.has(itemValue)) {
      seen.add(itemValue);
      return true;
    }

    return false;
  });
}

// // 示例使用
// const example1 = [123, "meili", "123", "mogu", 123];
// const result1 = uniqueArray(example1);
// console.log(result1); // 输出：[123, "meili", "123", "mogu"]

// const example2 = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"];
// const result2 = uniqueArray(example2);
// console.log(result2); // 输出：[123, [1, 2, 3], [1, "2", 3], "meili"]

// const example3 = [
//   123,
//   { a: 1 },
//   { a: { b: 1 } },
//   { a: "1" },
//   { a: { b: 1 } },
//   "meili",
// ];
// const result3 = uniqueArray(example3);
// console.log(result3); // 输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
