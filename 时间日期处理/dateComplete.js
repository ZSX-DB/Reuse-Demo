/**
 * 日期补全
 */
let now = new Date()

// 只有toLocaleDateString能获得精确日期，但小于10的天数或月数只显示一位
console.log(now.toLocaleDateString())
// 或者是字符串拼接
console.log(now.getFullYear(), now.getMonth() + 1, now.getDate())

// 使用toLocaleDateString
// const dateComplete = date => {
//     date = date.toLocaleDateString().split('')
//     for (let i = 0; i < date.length; i++) {
//         if (date[i - 1] === '-' && (date[i + 1] === '-' || date[i + 1] === undefined)) {
//             date.splice(i, 0, '0')
//             i++
//         }
//     }
//     return date.join('')
// }


// 性能更好，更简洁
const dateComplete = date => {
    const year = date.getFullYear()
    const mouth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return `${year}-${mouth}-${day}`
}

console.log(dateComplete(new Date('2021-2-5')))
console.log(dateComplete(new Date('2021-12-5')))
console.log(dateComplete(new Date('2021-2-15')))
