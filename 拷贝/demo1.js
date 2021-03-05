/**
 * 深拷贝
 */

// 解决循环引用问题: 额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象
const clone = (target, wm = new WeakMap()) => {
    if (typeof target !== 'object' || target === null ) return target
    let result = target instanceof Array ? [] : {}
    if (wm.get(target)) return wm.get(target)
    wm.set(target, result)
    for (const key in target) {
        if (target.hasOwnProperty(key)) result[key] = clone(target[key], wm)
    }
    return result
}

// 循环引用对象
const circularObj = {
    a: 1,
    b: true,
    c: 'str',
    d: () => 'D',
    e: {
        f: 'g'
    },
    h: [1, 3]
}
circularObj.i = circularObj

const obj = clone(circularObj)
obj.j = 'J'
console.log(obj, circularObj)


// 循环引用数组
const circularArr = [
    1, true, 'str', () => 'D', {a: 97}, [false, 'f', 99]
]
circularArr.push(circularArr)

const arr = clone(circularArr)
arr.push('OK')
console.log(arr, circularArr)
