/**
 * 判断是否为小数
 * @param n
 * @returns {boolean}
 */
// const isDecimal = n => String(n).includes('.')

// 效率更高
// const isDecimal = n => n !== Math.floor(n)

// console.log(isDecimal(123.45), isDecimal(999))

/**
 * 判断是否为整数
 * @param n
 * @returns {boolean}
 */
// const isInt = n => !String(n).includes('.')
const isInt = n => n === Math.floor(n)


console.log(isInt(5.2), isInt(7))
