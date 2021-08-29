const ts1 = new Date('October 13, 2014 11:11:00').valueOf()
const ts2 = new Date('October 14, 2014 11:11:00').valueOf()
const ts3 = new Date('October 15, 2014 12:12:10').valueOf()

console.log(1000 * 60 * 60 * 24)
// const getDay = tsDiff => Math.floor(tsDiff / 24 / 60 / 60 / 1000)

/**
 * @param tsDiff {number}
 * @returns {number}
 */
const getDay = tsDiff => Math.floor(tsDiff / 86400000)

console.log(getDay(ts2 - ts1))
console.log(getDay(ts3 - ts1))
console.log(getDay(ts3 - ts2))
