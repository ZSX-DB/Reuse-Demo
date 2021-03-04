/**
 * 函数式风格深拷贝函数
 * @param target
 * @returns {{}|[]|*}
 */
const clone = target => {
    const getType = target => {
        if (typeof target !== "object") return 1
        return target instanceof Array ? 2 : 3
    }

    // 循环引用标记
    const wm = new WeakMap()
    wm.set(target, 1)

    const cloneArr = arr => {
        const res = []
        for (const a of arr) {
            switch (getType(a)) {
                case 1:
                    res.push(a)
                    break
                case 2:
                    wm.get(a) ? res.push(res) : res.push(cloneArr(a))
                    break
                case 3:
                    wm.get(a) ? res.push(res) : res.push(cloneObj(a))
            }
        }
        return res
    }

    const cloneObj = obj => {
        const res = {}
        for(const [k, v] of Object.entries(obj)){
            switch (getType(v)) {
                case 1:
                    res[k] = v
                    break
                case 2:
                    wm.get(v) ? res[k] = res : res[k] = cloneArr(v)
                    break
                case 3:
                    wm.get(v) ? res[k] = res : res[k] = cloneObj(v)
            }
        }
        return res
    }

    switch (getType(target)) {
        case 1:
            return target
        case 2:
            return cloneArr(target)
        case 3:
            return cloneObj(target)
    }

}


let obj = {
    a: 3,
    b: true,
    c: {
        d: false,
        e: 2,
        f: {
            g: 'str'
        }
    },
    h: [1, 3, 5, 7, 9]
}
obj.i = obj

let obj1 = clone(obj)
obj1.test = 'test'

console.log('obj:', obj, obj1)

let arr = [1, 'str', false]
arr.push(arr)

let arr1 = clone(arr)
arr1.push('test')
console.log('arr:', arr, arr1)

let mix = {
    a: [3, true, 'str']
}
mix.a.push(mix)

let mix1 = clone(mix)
mix1.a.push('test')
mix1.test = 'test'

console.log('mix:', mix, mix1)


