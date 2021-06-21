const reset = () => {
    console.log('RESET')
}

const autoResetFn = fn => () => {
    reset()
    return fn
}

const doA = autoResetFn((a, b) => {
    console.log(a + b)
})

const doB = autoResetFn((a, b, c) => a + b + c)

const doC = autoResetFn(() => {
    console.log('nothing')
})

// 功能实现，但调用不直观
doA()(3, 8)
console.log(doB()(1, 2, 3))
doC()()
