const data = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1,
                children: [{
                    id: 3,
                    text: '节点1_1',
                    parentId: 1,
                    children: [{
                        id: 4,
                        text: '节点1_1',
                        parentId: 1,
                    }]
                }]
            }
        ]
    }
]

const treeToList = (tree) => {
    let res = []
    const dfs = (tree) => {
        tree.forEach((item) => {
            if(item.children){
                dfs(item.children)
                delete item.children
            }
            res.push(item)
        })
    }
    dfs(tree)
    return res
}
 
console.log(treeToList(data));