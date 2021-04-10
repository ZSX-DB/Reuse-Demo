/**
 * 判断是否为小数
 * @param n
 * @returns {boolean}
 */

// const isDecimal = n => String(n).includes('.')


// 效率更高
const isDecimal = n => n === Math.floor(n)

console.log(isDecimal(123.45), isDecimal(999))
