
// 打印格式为：
// 原字符串 = 结果
// 1+2*3 = 7
// 11+2*(10-4)/(3-1)+2 = 9 
// 输入字符串仅包含加、减、乘、除、括号和数字，不包含空格或其他字符； 
// 没有正负号，无需考虑溢出、浮点数精度等问题； 
// 空字符串结果为0；

//1.优先括号内（括号内也是表达式递归） 2.乘除  3.加减
function calc(expr) {
    if (!expr) return 0
    const arr = []
    let i = 0;
    let preIndex = 0, curindex = 0;
    while (i < expr.lenth) {
        switch (expr[i]) {
            case '+':
                arr.push(Number(expr.slice(preIndex, i)))
                preIndex = i
                break;
            case '-':
                arr.push(-1 * Number(expr.slice(preIndex, i)))
                preIndex = i
                break;
            case '*':
                arr.push(arr.pop() * Number(expr.slice(preIndex, i)))
                preIndex = i
            case '/':
                arr.push(arr.pop() / Number(expr.slice(preIndex, i)))
                preIndex = i;
                break
        }
    }
    let res = 0;
    while (arr.length) {
        res += arr.pop();
    }
    return res;
}

let temp = '1+2*(10-4)/(3-1)+2'
console.log(calc(temp))