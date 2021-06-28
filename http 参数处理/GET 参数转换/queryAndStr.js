const queryToStr = query => {
    let str = '?'
    for (const [key, value] of Object.entries(query)) {
        str += `${key}=${value}&`
    }
    return str.substring(0, str.length - 1)
}

const strToQuery = str => str.substring(1, str.length).split('&').reduce((total, item) => {
    const [key, val] = item.split('=')
    total[key] = val
    return total
}, {})

const query = {
    id: 3,
    height: 178,
    name: 'neo'
}

const str = '?id=3&height=178&name=neo'

console.log(queryToStr(query))
console.log(strToQuery(str))
