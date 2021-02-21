/**
 * 深拷贝
 */

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

// 循环引用数组
const circularArr = [
    1, true, 'str', () => 'D'
]
circularArr.push(circularArr)

// 解决办法: 额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象
const clone = (target, map = new Map()) => {
    if (typeof target !== 'object') return target
    let result = target instanceof Array ? [] : {}
    for (const prop in target) {
        if (target.hasOwnProperty(prop) && typeof target[prop] === 'object') {
            console.log(prop, map.get(target))
            if (map.get(target)) return map.get(target)
            map.set(target, result)
            result[prop] = clone(target[prop], map)
        } else {
            result[prop] = target[prop]
        }
    }
    return result
}

let obj = {
    a: 3,
    b: [3,5],
    c:{
        d: false
    }
}
// obj.e = obj
let s = clone(obj)

console.log(s)

// const obj = clone(circularObj)
// obj.f = 'F'
// console.log(obj, circularObj)

// const arr = clone(circularArr)
// arr.push('OK')
// console.log(arr, circularArr)
