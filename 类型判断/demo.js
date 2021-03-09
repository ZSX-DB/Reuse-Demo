// 返回类似[object Number]的形式
// const getType = target => Object.prototype.toString.call(target)

// 更符合直觉的方式
const getType = target => {
    const type = Object.prototype.toString.call(target).toLowerCase()
    return type.substring(8, type.length - 1)
}

class Demo {
    constructor() {
    }
}


console.log(getType(3))
console.log(getType(false))
console.log(getType('str'))
console.log(getType([3, 5, 11]))
console.log(getType({a: 3}))
console.log(getType(undefined))
console.log(getType(null))
console.log(getType(Symbol(15)))
console.log(getType(10n))
// 可以判断日期
console.log(getType(new Date()))
// 可以判断正则
console.log(getType(/ab+c/))
// 可以判断错误
console.log(getType(new Error()))
// 可以判断方法
console.log(getType(() => {
}))
// class判断成object，事实上是语法糖
console.log(getType(new Demo()))



