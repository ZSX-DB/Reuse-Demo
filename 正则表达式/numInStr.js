/**
 * 获取字符串中的数字
 */

const str = '规格：207 ml，价格 100.00 元'

console.log(str.match(/\d+/g))
console.log(str.replace(/[^0-9.]/g, ''))

// 判断是否为数字并且最多两位小数
console.log(/^\d+\.\d{0,2}$/.test('14.6'))
console.log(/^\d+\.\d{0,2}$/.test('142.643'))

/**
 * @param str {string}
 * @returns {string}
 */
const getPureNum = str => str.replace(/[^0-9]/g, '')
console.log('============== getPureNum ==============')
console.log(getPureNum('S12.3'))
console.log(getPureNum('www.456.com'))

/**
 * @param str {string}
 * @returns {string}
 */
const getTwoDecimalsNum = str => {
    if (str.includes('.') === false) {
        return str.replace(/[^0-9]/g, '')
    }
    str = str.replace(/[^0-9.]/g, '')
    while (str[0] === '.') {
        str = str.substring(1, str.length)
    }
    if (str.includes('.') === false) {
        return str
    }
    const firstDotIdx = str.indexOf('.')
    const left = str.substring(0, firstDotIdx)
    const right = str.substring(firstDotIdx, str.length).replace(/[.]/g, '').substring(0, 2)
    return `${left}.${right}`
}
console.log('============== getPureNum ==============')
console.log(getTwoDecimalsNum('S12.3'))
console.log(getTwoDecimalsNum('www.456.com'))
console.log(getTwoDecimalsNum('545.768'))
console.log(getTwoDecimalsNum('443.7'))
console.log(getTwoDecimalsNum('41.'))
console.log(getTwoDecimalsNum('...2331..3'))
console.log(getTwoDecimalsNum('...2341.'))
console.log(getTwoDecimalsNum('...2351'))
console.log(getTwoDecimalsNum('...2361...'))
console.log(getTwoDecimalsNum('...2371...899'))


