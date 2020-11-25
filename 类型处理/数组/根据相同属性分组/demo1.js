/**
 * 对象数组
 */
let orderList = [
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

// 思路
// 1、判断需要筛选的参数有多少种
// 2、根据该参数再去获取对应的数组项重新组合

const alignGrouping = (arr, attr) => {
    const attrList = [...new Set(arr.map(item => item[attr] ))]
    const list = []
    attrList.forEach(item=>{
        list.push({
            attr: item,
            data: []
        })
    })
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<list.length;j++){
            if(arr[i][attr] === list[j].attr){
                let tmp = JSON.parse(JSON.stringify(arr[i]))
                delete tmp[attr]
                list[j].data.push(tmp)
            }
        }
    }
    return list
}
alignGrouping(orderList, 'brand')
console.log(alignGrouping(orderList, 'brand'))