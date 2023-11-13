const arr = [
  "1.1",
  "2.3.3",
  "4.3.5",
  "0.3.1",
  "0.302.1",
  "4.20.0",
  "4.3.5.1",
  "1.2.3.4.5",
];

// 版本号比较函数
function compareVersions(a, b) {
    const versionA = a.split('.').map(Number);
    const versionB = b.split('.').map(Number);
  
    // 比较每个部分的版本号
    for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
      const numA = versionA[i] || 0;
      const numB = versionB[i] || 0;
  
      if (numA < numB) {
        return -1;
      } else if (numA > numB) {
        return 1;
      }
    }
  
    // 如果所有部分都相等，则长度较短的版本号较小
    return versionA.length - versionB.length;
  }
  
  // 版本号排序
  const sortedArr = arr.sort(compareVersions);
  
  console.log(sortedArr);