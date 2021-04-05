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

// const compareFn = (x, y) => {
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
// }

// 上面的表达式可转化成下面
// const compareFn = (x, y) => {
//     if (x.total !== y.total) return y.total - x.total
//     if (x.math !== y.math) return y.math - x.math
//     if (x.cn !== y.cn) return y.cn - x.cn
//     return y.en - x.en
// }
// list.sort(compareFn)

// 通用函数
const multilevelSort = (list, sortKey) => list.sort((x, y) => {
    for (const [key, val] of Object.entries(sortKey)) {
        if (x[key] !== y[key]) return val === 'DESC' ? y[key] - x[key] : x[key] - y[key]
    }
})


const sortKey = {
    total: 'DESC',
    math: 'DESC',
    cn: 'DESC',
    en: 'DESC'
}
console.log(multilevelSort(list, sortKey))
