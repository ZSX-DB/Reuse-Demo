/**
 * 数组去重
 * 以下方法仅适用于浅拷贝
 */
let numList = [1, 13, 24, 11, 11, 14, 1, 2, 6, 8, 8, 37]
let letterList = ['a', 'd', 'c', 'g', 'z', 'g', 'd',]
let elseList = ['a', 3, 'd', 'g', 5, 'd', 4, 9, 0, 'd', 9, [], [], {}, {}]


//ES6 Set类似于数组，但它的一大特性就是所有元素都是唯一的，没有重复，可多个数组使用
function setFn(arr) {
    // Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
    // return Array.from(new Set(arr))
    return [...new Set(arr)]
}

// 利用includes,若包含，则不添加
function includesFn(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) newArr.push(arr[i])
    }
    return newArr
}


console.log('numList的值为' + setFn(numList))
console.log('letterList的值为' + includesFn(letterList))

const [list1, list2] = [setFn(elseList), includesFn(elseList)]
console.log(list1, list2)
