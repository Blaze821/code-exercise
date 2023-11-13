const render = (vnode) => {
    if(Object(vnode) !== vnode){
        return document.createTextNode(vnode + '')
    }
    const dom = document.createElement(vnode.tag)
    if(vnode.attrs){
        Object.keys(vnode.attrs).forEach((key) => {
            dom.subAttrs(key, vnode.attrs[key])
        })
    }

    vnode.children.forEach((child) => dom.appendChild(render(child)))
    return dom
}

const app = render({
    tag: 'DIV',
    attrs: {
      id: 'app',
    },
    children: [
      {
        tag: 'DIV',
        children: [{ tag: 'A', children: [1] }],
        attrs: {
          style: 'color: red;'
        }
      },
      {
        tag: 'DIV',
        children: [
          { tag: 'A', children: [2] },
          { tag: 'A', children: [] },
        ],
      },
    ],
  })
  console.dir(app)
  
  document.body.appendChild(app)