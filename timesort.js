/**
 * 日期排序
 */

// 以下两种方式都可以创建可排序的时间格式，但-的时间更精确
console.log(new Date("2020-07-08"))
console.log(new Date("2020/07/08"))
console.log(new Date("2020-07-08")>new Date("2020/07/08"))

let timeList=[
    "2020-05-18 00:00:00",
    "2020-05-08 00:00:00",
    "2020-07-08 00:00:00",
    "2020-07-09 00:00:00",
    "2020-07-09 12:00:00"
]

let dateList = timeList.map(item=>item.substring(0,10))
dateList = dateList.map(item=>item=new Date(item))
dateList.sort((a,b) => b-a)

console.log(dateList)