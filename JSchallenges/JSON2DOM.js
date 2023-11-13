/**
 * 
    把上诉虚拟Dom转化成下方真实Dom
    <div id="app">
    <span>
        <a></a>
    </span>
    <span>
        <a></a>
        <a></a>
    </span>
    </div>
*/

const dom = {
    tag: 'DIV',
    attrs:{
    id:'app'
    },
    children: [
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] }
        ]
      },
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] },
          { tag: 'A', children: [] }
        ]
      }
    ]
  }

  const _render = () => {
    if(typeof vnode === 'number') {
        vnode = String(vnode)
    }

    if(typeof vnode === 'string'){
        return document.createTextNode(vnode)
    }

    const dom = document.createElement(vnode.tag)
    if(vnode.attrs){
        Object.keys(vnode.attrs).forEach((key) => {
            const value = vnode.attrs[key]
            dom.setAttribute(key, value)
        })
    }

    vnode.children.forEach((child) => dom.appendChild(_render(child)))
    return dom
  }