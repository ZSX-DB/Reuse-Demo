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

// 相比demo1减少了循环次数
const alignGrouping = (arr, attr) => {
    let newList = []
    // keyObj来存取key值，如果没有就生成data, 有的话就匹配然后push
    let keyObj = {}
    for(let i=0;i<arr.length;i++){
        let tmp = JSON.parse(JSON.stringify(arr[i]))
        delete tmp[attr]
        if(!keyObj[arr[i][attr]]){
            newList.push({
                attr: arr[i][attr],
                data: [tmp]
            })
            // 这里 = 后面的值是无意义的，判断主要是通过key值
            keyObj[arr[i][attr]] = attr
        }else {
            for(let j = 0;j<newList.length;j++){
                if(newList[j].attr === arr[i][attr]){
                    newList[j].data.push(tmp)
                }
            }
        }
    }
    return newList
}


console.log(alignGrouping(orderList, 'brand'))