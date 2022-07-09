/**
 * 根据 url 获取图片类型
 * @param {string} src
 * @returns {string}
 */
const getImgType = (src) => {
    const lastDotIdx = src.lastIndexOf('.')
    return src.slice(lastDotIdx + 1)
}

/**
 * 获取 toDataURL 参数
 * @param {string} imgType
 * @returns {["image/jpeg", number] | ["image/png"]}
 */
const getToDataURLParam = (imgType) => {
    if (imgType === 'jpg') {
        // 当图片类型为 jpg 时，可以从 0 到 1 的区间内选择图片的质量，默认为 0.92
        return ["image/jpeg", 1.0]
    } else {
        return ["image/png"]
    }
}

/**
 * 下载非同源图片（缺点：图片的体积会膨胀很多）
 * @param {string} src
 * @param {string} imgName
 */
const downloadImg = (src, imgName) => {
    const image = new Image()
    // 解决跨域 Canvas 污染问题
    image.crossOrigin = 'Anonymous'
    image.src = src
    image.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        const imgType = getImgType(src)
        const url = canvas.toDataURL(...getToDataURLParam(imgType))

        // 生成一个 a 元素
        const a = document.createElement('a')
        // 创建一个单击事件
        const event = new MouseEvent('click')
        // 设置下载名称
        a.download = imgName ?? 'download_img'
        // 将生成的 url 设置为 a.href 属性
        a.href = url
        // 触发 a 的单击事件
        a.dispatchEvent(event)
        a.remove()
    }
}
