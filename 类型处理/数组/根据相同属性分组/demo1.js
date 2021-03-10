const orderList = [
    {
        brand: 'huawei',
        goods: '华为p30'
    },
    {
        brand: 'samsung',
        goods: '三星s20'
    },
    {
        brand: 'huawei',
        goods: '华为mate30 pro'
    },
    {
        brand: 'apple',
        goods: 'iphone 6s'
    },
    {
        brand: 'apple',
        goods: 'iphone X'
    },
    {
        brand: 'mi',
        goods: '小米 mix3'
    }
]

const groupingSame = (array, param) => {
    const setItem = (obj, param) => {
        delete obj[param]
        return obj
    }
    array = JSON.parse(JSON.stringify(array))
    const map = new Map()
    const res = []
    let idx = 0
    for (const item of array) {
        if (!map.get(item[param]) && map.get(item[param]) !== 0) {
            map.set(item[param], idx++)
            res.push({
                val: item[param],
                children: [setItem(item, param)]
            })
        } else {
            res[map.get(item[param])].children.push(setItem(item, param))
        }
    }
    return res
}

console.log(groupingSame(orderList, 'brand'))
