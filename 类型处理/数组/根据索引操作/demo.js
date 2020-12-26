/**
 * splice会改变原数组
 */
const list = [3, 7, 32, 12, 64]

// 根据索引删除
list.splice(2, 1)
console.log(list)

// 根据索引添加
list.splice(1, 0, 86)
console.log(list)
