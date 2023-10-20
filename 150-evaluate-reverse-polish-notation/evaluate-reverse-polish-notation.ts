function evalRPN(tokens: string[]): number {
    const stack = [];
    for(const token of tokens) {
        const number = Number(token);
        if(Number.isNaN(number)) {
            const a = stack.pop();
            const b = stack.pop();
            let result = 1;
            switch(token) {
                case '+':
                    result = b + a;
                    break;
                case '-':
                    result = b - a;
                    break;
                case '/':
                    result = b / a;
                    if(result > 0) {
                        result = Math.floor(result)
                    } else {
                        result = Math.ceil(result)
                    }
                    break;
                case '*':
                    result = b * a;
                    break;
            }
            stack.push(result)
        } else {
            stack.push(number)
        }
    }
    return stack[0]
};