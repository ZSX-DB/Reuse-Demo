// 获取字符串中的数字

let str = '规格：207ml'
let str1 = '规格：207ml,价格100元'

console.log(str.match(/\d+/g))
console.log(str.replace(/[^0-9]/ig, ''))


console.log(str1.match(/\d+/g))
console.log(str1.replace(/[^0-9]/ig, ''))