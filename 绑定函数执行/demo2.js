const reset = () => {
    console.log('reset')
}

const autoResetFn = fn => {
    class AutoReset {
        constructor(fn) {
            this.fn = fn
            reset()
        }

        getFn() {
            return this.fn
        }
    }

    return new AutoReset(fn).getFn()
}

const doA = autoResetFn((a, b) => a + b)
console.log(doA(1, 3))

const doB = autoResetFn((a, b) => {
    console.log(a + b)
})

doB(2, 7)
