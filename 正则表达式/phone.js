/**
 * 验证手机号
 */
const isPhoneNum = nums => /^1[3-9][0-9]{9}$/.test(nums)

console.log(isPhoneNum(13546886679))
console.log(isPhoneNum(16246975679))
