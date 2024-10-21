function parseBoolExpr(expression: string): boolean {
    if(['t', 'f'].includes(expression[0])) return expression[0] === 't'
    let pointer = 0;
    const stack: [string, boolean][] = [];
    let current = false;
    while(pointer < expression.length) {
        const currentChar = expression[pointer];
        if(currentChar === ')') {
            const [logical, lastValue] = stack.pop();
            const resolvedLastValue = logical === '!' ? !lastValue : lastValue;
            resolveValue(resolvedLastValue)
        } else if(['&', '|', '!'].includes(currentChar)) {
            stack.push([currentChar, currentChar === '&' ? true : false])
        } else if(['t', 'f'].includes(currentChar)) {
            resolveValue(currentChar === 't')
        }
        pointer++
    }

    return current;

    function resolveValue(nextValue: boolean) {
        if(stack.length === 0) {
            current = nextValue
            return;
        }
        const [logical, lastValue] = stack[stack.length - 1];
        if(logical === '&') {
            if(lastValue && !nextValue) stack[stack.length - 1][1] = false
        } else if(logical === '|') {
            if(nextValue) stack[stack.length - 1][1] = true
        } else if(logical === '!') {
            stack[stack.length - 1][1] = nextValue
        }
    }
};