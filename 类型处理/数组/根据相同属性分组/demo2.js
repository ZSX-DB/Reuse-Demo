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

// reduce api(效率高)
const groupingSame = (array, param) => {
    const reducer = (acc, cur) => {
        const mark = cur[param]
        delete cur[param]
        const target = acc.find(item => item.val === mark)
        target ? target.children.push(cur) : acc.push({
            val: mark,
            children: [cur]
        })
        return acc
    }
    return JSON.parse(JSON.stringify(array)).reduce(reducer, [])
}


console.log(groupingSame(orderList, 'brand'))
