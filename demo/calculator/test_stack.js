// 例如存在字符串 const str = '11+2-3*4+5/2*4+10/5'，
// 现在需要将高优先级运算，用小括号包裹起来，
// 例如结果为 '11+2-(3*4)+(5/2*4)+(10/5)'。
// 注意可能会出现连续的乘除运算，需要包裹到一起
// a+(b-(c*d))
function test(expr) {
    // const temp = '11+2-3*4+5/2*4+10/50'
    //说明：栈的方式
    const arr = []
    let i = 0, preIndex = 0
    let hasHigh = false;
    while (i < expr.length) {
        switch (expr[i]) {
            case '+':
            case '-':
                arr.push(expr.slice(preIndex, i))
                if (hasHigh) {
                    arr.push(')')
                    hasHigh = false;
                }
                arr.push(expr[i])
                preIndex = i + 1;
                break;
            case '*':
            case '/':
                if (!hasHigh) {
                    arr.push('(')
                }
                arr.push(expr.slice(preIndex, i + 1))
                preIndex = i + 1;
                hasHigh = true;
                break
        }
        i++;
    }
    arr.push(expr.slice(preIndex, expr.length))
    if (hasHigh) {
        arr.push(')')
    }
    console.log('arr ', arr)
    return arr.join('')
}
const temp = '11+2-3*4+5/2*4+10/50'
console.log(test(temp))