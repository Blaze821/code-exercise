function listToTree(list) {
    const map = {}; // 用于存储每个节点的引用
  
    list.forEach(item => {
      const { id, parentId, ...rest } = item;
      const node = { ...rest, children: [] };
      map[id] = node;
  
      if (parentId !== undefined) {
        const parentNode = map[parentId] || { children: [] };
        parentNode.children.push(node);
      }
    });
  
    return Object.values(map).filter(node => !node.parentId);
  }
  
  // 示例数据
  const flatList = [
    { id: 1, name: 'Node 1' },
    { id: 2, name: 'Node 2', parentId: 1 },
    { id: 3, name: 'Node 3', parentId: 1 },
    { id: 4, name: 'Node 4', parentId: 2 },
    { id: 5, name: 'Node 5', parentId: 2 },
    { id: 6, name: 'Node 6', parentId: 3 },
    { id: 7, name: 'Node 7', parentId: 3 },
  ];
  
  const tree = listToTree(flatList);
//   console.log(JSON.stringify(tree));
  