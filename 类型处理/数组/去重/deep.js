/**
 * 去重深拷贝数组
 */
const list = [4, 's', '32', {}, 54, [], false, {}, 67, '32', 32]

const removeDeep = list => [...new Set(list.map(item => JSON.stringify(item)))].map(i => JSON.parse(i))

console.log(removeDeep(list))