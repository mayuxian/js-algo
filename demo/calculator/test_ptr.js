// 例如存在字符串 const str = '11+2-3*4+5/2*4+10/5'，
// 现在需要将高优先级运算，用小括号包裹起来，
// 例如结果为 '11+2-(3*4)+(5/2*4)+(10/5)'。
// 注意可能会出现连续的乘除运算，需要包裹到一起
function test(expr) {
    // const temp = '11+2-3*4+5/2*4+10/50'
    //说明：类似通过双指针检索匹配方式
    const newExprs = expr.slice(0).split('')
    const exprArr = expr.split('');
    const highs = ['*', '/']
    const lows = ['+', '-'];
    let left = 0, right = 0, count = 0;
    let hasHigh = false;
    for (let i = 0; i < exprArr.length; i++) {
        console.log('char= ', exprArr[i])
        if (highs.includes(exprArr[i])) {
            hasHigh = true;
        }
        if (!hasHigh && lows.includes(exprArr[i])) {
            left = i
        }
        if (hasHigh && (lows.includes(exprArr[i]) || i == exprArr.length - 1)) {
            right = i == exprArr.length - 1 ? i + 1 : i;
        }
        if (hasHigh && left && right) {
            hasHigh = false;
            newExprs.splice(right + count * 2, 0, ')')
            newExprs.splice(left + 1 + count * 2, 0, '(')
            count++
            left = i
            right = 0
            console.log('newExprs ', newExprs.join(''))
        }
    }
    return newExprs.join('')
}
const temp = '11+2-3*4+5/2*4+10/50'
console.log(test(temp))