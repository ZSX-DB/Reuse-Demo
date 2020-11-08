/**
 * 使用递归生成循环
 * 
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

function createUrlList(baseList, loopList, lastCount, count = 1 ) {
    if(count === lastCount){
        console.log(baseList)
        return
    }else {
        count++
    }
    let list = baseList.length === 0 ? loopList : baseList
    let len1 = list.length, len2 = loopList.length
    const newList = []
    for(let i=0;i<len1;i++){
        for(let j=0;j<len2;j++){
            newList.push(`${list[i]}${loopList[j]}`)
        }
    }
    createUrlList(newList, loopList, lastCount, count)
}

createUrlList([], unitList, 4)