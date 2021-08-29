const ts1 = new Date('October 13, 2014 11:11:00').valueOf()
const ts2 = new Date('October 13, 2014 12:11:00').valueOf()
const ts3 = new Date('October 14, 2014 12:11:10').valueOf()

// const getHour = tsDiff => Math.floor(tsDiff / 60 / 60 / 1000)
/**
 *
 * @param tsDiff {number}
 * @returns {number}
 */
const getHour = tsDiff => Math.floor(tsDiff / 3600000)

console.log(getHour(ts2 - ts1))
console.log(getHour(ts3 - ts1))
console.log(getHour(ts3 - ts2))


