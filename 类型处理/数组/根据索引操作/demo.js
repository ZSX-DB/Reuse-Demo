/**
 * splice会改变原数组
 */
const list = [3, 7, 32, 12, 64]

// 根据索引删除
const remove = (list, i) => {
    list.splice(i, 1)
}

const add = (list, i, data) => {
    list.splice(i, 0, data)
}

remove(list, 4)
console.log(list)

add(list,2, 11)
console.log(list)
