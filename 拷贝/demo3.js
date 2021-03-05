const clone = target => {

    const setTypeMark = val => {
        if (typeof val !== 'object' || val === null) return 0
        return val instanceof Array ? 1 : 2
    }

    // 提前返回提高性能
    if (!setTypeMark(target)) return target

    // 解决循环引用问题
    const wm = new WeakMap()
    wm.set(target, true)

    const setFns = () => [cloneBase, cloneArr, cloneObj]

    const cloneBase = base => base

    const cloneArr = arr => {
        const res = []
        for (const item of arr) {
            wm.get(item) ? res.push(res) : res.push(setFns()[setTypeMark(item)](item))
        }
        return res
    }

    const cloneObj = obj => {
        const res = {}
        for (const [key, val] of Object.entries(obj)) {
            wm.get(val) ? res[key] = res : res[key] = [cloneBase, cloneArr, cloneObj][setTypeMark(val)](val)
        }
        return res
    }

    return [cloneBase, cloneArr, cloneObj][setTypeMark(target)](target)

}

const data = {
    a: 1,
    b: true,
    c: undefined,
    d: null,
    e: 'str',
    f: ['F', 17]
}
data.g = data

const cloneData = clone(data)
cloneData.test = 'test'
delete cloneData.a

console.log(data, cloneData)
