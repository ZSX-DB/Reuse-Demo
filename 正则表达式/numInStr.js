/**
 * 获取字符串中的数字
 */

let str = '规格：207ml,价格100元'

// 两种方式均不会对原字符串造成影响
console.log(str.match(/\d+/g))
console.log(str.replace(/[^0-9]/ig, ''))
