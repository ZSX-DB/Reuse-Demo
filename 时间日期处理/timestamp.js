/**
 * 生成timestamp
 */


// 获取的时间戳把毫秒改成000显示，因为这种方式只精确到秒
let ts1 = Date.parse(new Date())
console.log(ts1)

let ts2 = (new Date()).valueOf()
console.log(ts2)

let ts3 = new Date().getTime()
console.log(ts3)

/**
 * 时间戳转化为日期格式
 */
const getLocalTimeFn = ts => {
    // 转化为北京时间需要额外增加八个时区
    const date = new Date(ts + 8 * 3600 * 1000)
    // Date的toJSON方法返回格林威治时间的JSON格式字符串，实际是使用toISOString方法的结果
    return date.toJSON().substring(0, 19).replace('T', ' ')
}
// 优化
const getLocalTime = ts => new Date(parseInt(ts) + 28800000).toJSON().substring(0, 19).replace('T', ' ')

const elseFn = ts => {
    const dateStr = JSON.stringify(new Date(parseInt(ts) + 28800000))
    return `${dateStr.substring(1, 11)} ${dateStr.substring(12, 20)}`
}

console.log(getLocalTimeFn(ts1))
console.log(getLocalTime(ts2))
console.log(elseFn(ts3))