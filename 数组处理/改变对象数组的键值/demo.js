/**
 * 改变数组内对象的键名
 */

let arr=[
    {
        id:1,
        name:'第一'
    },
    {
        id:2,
        name:'第二'
    }
]

let newArr= arr.map(obj=>{
    return{
        value: obj.id,
        label: obj.name
    }
})


console.log(newArr)