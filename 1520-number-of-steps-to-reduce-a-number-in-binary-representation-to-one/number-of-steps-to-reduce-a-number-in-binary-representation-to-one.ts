function numSteps(s: string): number {
    const stack = s.split('');
    let step = 0;
    while(stack.length > 1) {
        const last = stack.length - 1
        if(stack[last] === '0') {
            stack.pop();
        } else {
            let i = last;
            while(stack[i] === '1' && i >= 0) {
                stack[i] = '0'
                i--
            }
            if(i > -1) stack[i] = '1'
            else stack.unshift('1')
        }
        step++
    }
    return step;
};