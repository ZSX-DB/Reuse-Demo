/**
 * 改变数组内对象的键名
 */

const arr = [
    {
        id: 1,
        name: '第一'
    },
    {
        id: 2,
        name: '第二'
    }
]

const newArr = arr.map(obj => {
    return {
        value: obj.id,
        label: obj.name
    }
})


console.log(newArr)
