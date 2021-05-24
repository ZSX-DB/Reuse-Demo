/**
 * 用于获取 richText 纯文本的长度
 * 以下是每个 replace 的作用
 * - 匹配 html tag
 * - 匹配 空格 和 \n \r\n (在 js 中其表现为换行符，在 html 表现为空格), &nbsp; 为空格
 * - 匹配重字符 (字母的变形，为 O&#768; 或 O&#768; 等，实际显示仍为一个字符, 出现情况较少，为了性能可移除)
 * - 匹配 HTML Entities (其有两种表示方法, &entity_name; &#entity_number;)
 *   通常 richText 为了区别于 html 标签, 如 1 + 1 < 2 会变成 1 + 1 &lt; 2
 *   2 - 5 的 string 和 1 - 4 的 number 基本能匹配大多数情况
 * @param richText {string}
 * @returns {number}
 */
const getPlainTextLen = richText => richText
    .replace(/<[^>]+>/g, '')
    .replace(/ |\n|\r\n|&nbsp;/g, '')
    .replace(/[a-zA-Z]&#7([6-7][0-9]);/g, ' ')
    .replace(/&([a-z]{2,5}|#[0-9]{1,4});/g, ' ')
    .length


// 长度为 5 + 8 + 4 + 10 + 11 + 5 + 3 + 4 = 50
const html =
    `<h1>Title</h1>
     <h2>subtitle</h2>
     <h3>
       H&#769;e&#768;H&#769;e&#768;
     </h3>
     <ul>
       <li> First block </li>
       <li> Second&nbsp;block </li>
       <li> 1 + 1 &lt; 3 </li>
       <li> 5 &#62; 3 </li>
       <li> 100 &#8364; </li>
     </ul>`

console.log(getPlainTextLen(html))

// 参考链接 https://www.w3schools.com/html/html_entities.asp
