function minLength(s: string): number {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i])
        while(
            (stack[stack.length - 2] === 'A' && stack[stack.length - 1] === 'B') ||
            (stack[stack.length - 2] === 'C' && stack[stack.length - 1] === 'D') 
        ) {
            stack.pop(), stack.pop();
        }
    }
    return stack.length;
};