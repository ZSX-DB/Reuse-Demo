/**
 * 功能优化：可以下一级仍多选排序
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
    item.weight = item.cn + item.en
})

const multilevelSort = (list, sortKey) => {
    const getVal = (obj, key) => key.split(' ').reduce((pre, cur) => pre + obj[cur], 0)
    const setSign = ch => {
        if (ch === 'DESC') return -1
        if (ch === 'ASC') return 1
    }
    const compareFn = (x, y) => {
        for (const [key, val] of Object.entries(sortKey)) {
            if (getVal(x, key) !== getVal(y, key)) return (getVal(x, key) - getVal(y, key)) * setSign(val)
        }
    }
    return list.sort(compareFn)
}

// 先根据总成绩排序，再根据 cn 和 en 的成绩和排序
const sortKey = {
    'cn math en': 'DESC',
    'cn en': 'ASC'
}

console.log(multilevelSort(list, sortKey))
