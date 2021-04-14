/**
 * 三个 replaceAll 分别去除 html 标签，空格和换行
 * @param html
 * @returns {*}
 */
const getPlainTextLen = html => html
    .replaceAll(/<[^>]+>/gi, '')
    .replaceAll(' ', '')
    .replaceAll('\n', '')
    .length


const html =
    `<h1>Title</h1>
     <ul>
       <ol>First block</ol>
       <ol>Second block</ol>
     </ul>`

console.log(getPlainTextLen(html))
