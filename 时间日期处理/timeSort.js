/**
 * 日期排序
 */

// 以下两种方式都可以创建可排序的时间格式，如果有排序需求必须统一
console.log(new Date('2020-07-08'))
console.log(new Date('2020/07/08'))
console.log(new Date('2020-07-08')>new Date('2020/07/08'))

let timeList=[
    '2020-05-18',
    '2020-05-08',
    '2020-07-08',
    '2020-07-09',
    '2020-07-09'
]

const dateList = timeList.map(item=> new Date(item))
dateList.sort((a,b) => b-a)

console.log(dateList)
