/**
 * js动态生成循环
 * 使用eval来解析函数字符串
 */
const letterList = []
const numList = []
for(let i=0;i<26;i++)
{
    if(i<10) numList.push(String(i))
    letterList.push(String.fromCharCode(97+i))
}

// 生成所需数组
const unitList = [...numList,...letterList]

function createUrlList(count, loopList) {
    const createList = num => {
        const list = []
        for(let i = 0;i< num; i++){
            list.push(`a${i}`)
        }
        return list
    }
    let len = loopList.length
    let params = createList(count)
    // middleCode为需要执行的代码
    let prefixCode = '', middleCode = '', suffixCode = ''
    const urlList = []
    params.forEach(item=>{
        prefixCode+=`for(let ${item}=0;${item}<${len};${item}++){`
        middleCode+=('${loopList['+item+']}')
        suffixCode+='}'
    })

    middleCode = 'urlList.push(`' + middleCode + '`)'
    const jsCode = `${prefixCode}${middleCode}${suffixCode}`

    eval(jsCode)

    console.log(urlList)

}


createUrlList(4, unitList)