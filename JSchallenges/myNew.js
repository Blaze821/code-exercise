function myNew(constructor, ...args) {
    const newObj = {}
    newObj.__proto__ = constructor.prototype

    const result = constructor.apply(newObj, args)

    return result instanceof Object ? result : newObj
}