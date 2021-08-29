const ts1 = new Date('October 13, 2014 11:11:00').valueOf()
const ts2 = new Date('October 13, 2014 11:12:00').valueOf()
const ts3 = new Date('October 13, 2014 12:12:10').valueOf()

// const getMinute = tsDiff => Math.floor(tsDiff / 60 / 1000)
/**
 * 根据时间戳的差值获取分钟数，60s，1000ms
 * @param tsDiff
 * @returns {number}
 */
const getMinute = tsDiff => Math.floor(tsDiff / 60000)

console.log(getMinute(ts2 - ts1))
console.log(getMinute(ts3 - ts1))
console.log(getMinute(ts3 - ts2))
