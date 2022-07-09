/**
 * 下载同源图片
 * @param {string} url
 * @param {string} name
 */
const downloadImg = (url, name) => {
    const a = document.createElement('a')
    a.download = name
    a.href = url
    document.body.append(a)
    a.click()
    a.remove()
}
