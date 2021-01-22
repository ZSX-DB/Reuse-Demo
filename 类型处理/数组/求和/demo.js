const list1 = [3, 4, 6, 9, 5, 3, 4, 8]
const list2 = [1, 3, 5, 7, 9]

const getSum = nums => nums.reduce((pre, cur) => pre + cur)

console.log(getSum(list1), getSum(list2))