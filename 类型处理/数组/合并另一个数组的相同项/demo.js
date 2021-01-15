const list1 = [
    {
        id: 1,
        label: '第一'
    },
    {
        id: 2,
        label: '第二'
    },
    {
        id: 3,
        label: '第三'
    }
]

const list2 = [
    {
        id: 1,
        code: 'first'
    },
    {
        id: 2,
        code: 'second'
    },
    {
        id: 3,
        code: 'third'
    }
]

list1.forEach(item => {
    item.code = list2.find(i => i.id === item.id).code
})

console.log(list1)
