// 例如存在字符串 const str = '11+2-3*4+5/2*4+10/5'，
// 现在需要将高优先级运算，用小括号包裹起来，
// 例如结果为 '11+2-(3*4)+(5/2*4)+(10/5)'。
// 注意可能会出现连续的乘除运算，需要包裹到一起
function test(expr) {
    // const temp = '11+2-3*4+5/2*4+20/50'
    //说明：正则表达式方式
    let exprArr = expr.split('');
    let searchIndex = 0, count = 0;
    while (searchIndex < expr.length - 1) {
        const math = expr.slice(searchIndex).match(/(\d+[*/]{1})+\d+/)
        const left = searchIndex + math.index + count * 2;
        const right = searchIndex + math.index + math[0].length + count * 2;
        exprArr.splice(right, 0, ')')
        exprArr.splice(left, 0, '(')
        console.log('exprArr ', exprArr.join(''))
        count++;
        searchIndex = searchIndex + math.index + math[0].length
    }
    return exprArr.join('')
}
const temp = '11+2-3*4+5/2*4+10/50'
console.log(test(temp))