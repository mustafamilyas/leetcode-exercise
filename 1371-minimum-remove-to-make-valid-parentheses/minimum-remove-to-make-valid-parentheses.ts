function minRemoveToMakeValid(s: string): string {
    const toRemoveIndex = [], stackIndex = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stackIndex.push(i)
        else if (s[i] === ')') {
            if(stackIndex.length === 0) toRemoveIndex.push(i)
            else stackIndex.pop()
        }
    }
    const set = new Set([...toRemoveIndex, ...stackIndex]);
    let res = ''
    for(let i = 0; i < s.length; i++) {
        if(!set.has(i)) res += s[i]
    }
    return res
};