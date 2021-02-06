// 适用于无循环引用
const simple = obj => JSON.parse(JSON.stringify(obj))
