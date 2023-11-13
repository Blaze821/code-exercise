const tree = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];

// const treeToList = (params) => {
//     const result = [];
//     const dfs = (params) => {
//         params.forEach((item, index) => {
//             if(item.children){
//                 dfs(item.children)
//                 delete item.children
//             }
//             result.push(item)
//         })
//     }
//     dfs(params)
//     return result
// }
// console.log(treeToList(tree));

let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];

const listToTree = (params) => {
  const result = [];
  const map = new Map();
  params.forEach((item) => {
    map.set(item.id, item);
    item.children = []
  });

  params.forEach((item) => {
      const parentId = map.get(item.parentId);
      if(parentId){
          parentId.children.push(item)
      }else{
          result.push(item)
      }
  })
  return result
};

console.log(JSON.stringify(listToTree(list)));