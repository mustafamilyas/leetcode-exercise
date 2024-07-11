function reverseParentheses(s: string): string {
    let level = 0, cur = '';
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push([cur, level++])
            cur = ''
        } else if (s[i] === ')') {
            if(level % 2) {
                cur = reverse(cur)
                while(stack.length && stack[stack.length - 1][1] >= level) {
                    const [str, curLevel] = stack.pop();
                    if(curLevel % 2) cur += reverse(str)
                    else cur += str
                }
                stack.push([cur, level - 1])
            } else {
                while(stack.length && stack[stack.length - 1][1] >= level) {
                    const [str, curLevel] = stack.pop();
                    if(curLevel % 2) cur = reverse(str) + cur
                    else cur = str + cur
                }
                stack.push([cur, level])
            }
            level--
            cur = ''
        } else {
            cur += s[i];
        }
    }
    return stack.map((item)=>item[0]).join('') + cur
};

function reverse(s: string) {
    let res = ''
    for(let i = s.length - 1; i >= 0; i--) {
        res += s[i]
    }
    return res;
}