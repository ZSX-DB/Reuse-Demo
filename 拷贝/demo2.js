/**
 * 简单深拷贝是JSON.parse(JSON.stringify()), 其有三个问题
 * - 循环引用报错
 * - bigint 类型报错
 * - symbol 被解析为 undefined
 */

/**
 * 实现函数式风格深拷贝
 * @param target
 * @returns {*}
 */
const clone = target => {

    // 解决循环引用问题
    const wm = new WeakMap()
    wm.set(target, true)

    const setCallFn = val => {
        if (typeof val !== 'object') return clonePrimitives(val)
        if (val === null) return cloneNull()
        return val instanceof Array ? cloneArr(val) : cloneObj(val)
    }

    const clonePrimitives = val => val

    const cloneNull = () => null

    const cloneArr = arr => {
        const res = []
        for (const item of arr) {
            wm.get(item) ? res.push(res) : res.push(setCallFn(item))
        }
        return res
    }

    const cloneObj = obj => {
        const res = {}
        for (const [key, val] of Object.entries(obj)) {
            wm.get(val) ? res[key] = res : res[key] = setCallFn(val)
        }
        return res
    }

    return setCallFn(target)

}


const data = {
    a: 1,
    b: true,
    c: undefined,
    d: null,
    e: 'str',
    f: ['F', 17],
    g: 11n,
    h: Symbol(4),
    i: Symbol('The')
}
data.j = data

const cloneData = clone(data)
cloneData.test = 'test'
delete cloneData.a

console.log(data)
console.log(cloneData)
