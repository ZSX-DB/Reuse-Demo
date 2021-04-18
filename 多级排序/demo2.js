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

const nums = [7, -3, 2, 11, 9, 6, -2]

const listSortKey = [
    {
        val: v => v.cn + v.math + v.en,
        order: -1
    },
    {
        val: v => v.math,
        order: -1
    },
    {
        val: v => v.cn,
        order: -1
    },
    {
        val: v => v.en,
        order: -1
    },
]

const numsSortKey = [
    {
        val: v => v,
        order: 1
    }
]

/**
 * 通用函数
 * @param sortKey
 * @returns {function(...[*]=)}
 */
const sortBy = sortKey => (x, y) => {
    for (const {val, order} of sortKey) {
        if (val(x) !== val(y)) return (val(x) - val(y)) * order
    }
}

list.sort(sortBy(listSortKey))
nums.sort(sortBy(numsSortKey))

console.log(list)
console.log(nums)
