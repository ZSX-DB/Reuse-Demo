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

// 简洁，效率尚可
const groupingSame = (array, param) => {
    const cloneArray = JSON.parse(JSON.stringify(array))
    const params = [...new Set(array.map(item => item[param]))]
    return params.map(item => ({
        val: item,
        children: cloneArray.filter(i => i[param] === item).map(i => {
            delete i[param]
            return i
        })
    }))
}

console.log(groupingSame(orderList, 'brand'))
