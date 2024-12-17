function repeatLimitedString(s: string, repeatLimit: number): string {
    const counter = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 97]++;
    }
    const stack = [];
    for(let i = 0; i < counter.length; i++) {
        if(counter[i] > 0) stack.push(i)
    }
    let res = ''
    while(stack.length) {
        const top = stack[stack.length - 1];
        if(res.charCodeAt(res.length - 1) - 97 === top) break;
        const topCount = counter[top];
        const used = Math.min(topCount, repeatLimit);
        counter[top] -= used
        res += String.fromCharCode(top + 97).repeat(used)
        if(stack.length === 1) break;
        if(counter[top] === 0) {
            stack.pop()
            continue;
        }
        const top2Idx = stack.length - 2;
        const top2 = stack[top2Idx];
        const top2Count = counter[top2];
        counter[top2]--
        res += String.fromCharCode(top2 + 97)
        if(counter[top2] === 0) stack.splice(top2Idx, 1)
    }
    return res;
};