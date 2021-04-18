/**
 * 多级排序
 * DESC 降序
 * ASC  升序
 */
const createScore = (stu, cn, math, en) => ({
    stu,
    cn,
    math,
    en
})

const list = [
    createScore('vic', 67, 148, 92),
    createScore('bella', 72, 94, 102),
    createScore('abel', 39, 16, 149),
    createScore('king', 149, 146, 122),
    createScore('bop', 67, 133, 107),
    createScore('wee', 107, 133, 67),
    createScore('mary', 72, 102, 94),
    createScore('trump', 150, 7, 150),
    createScore('neo', 88, 150, 69)
]

list.forEach(item => {
    item.total = item.cn + item.math + item.en
})

// list.sort((x, y) => {
//     if (x.total === y.total) {
//         if (x.math === y.math) {
//             if (x.cn === y.cn) {
//                 return y.en - x.en
//             }
//             return y.cn - x.cn
//         }
//         return y.math - x.math
//     }
//     return y.total - x.total
// })

// 可简写
list.sort((x, y) => {
    if (x.total !== y.total) return y.total - x.total
    if (x.math !== y.math) return y.math - x.math
    if (x.cn !== y.cn) return y.cn - x.cn
    return y.en - x.en
})

// list.sort((x, y) => y.total - x.total)
//     .sort((x, y) => {
//         if (x.total === y.total) return y.math - x.math
//     })
//     .sort((x, y) => {
//         if (x.math === y.math) return y.cn - x.cn
//     })

console.log(list)
