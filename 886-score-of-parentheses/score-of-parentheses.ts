function scoreOfParentheses(s: string): number {
    const stack = [0];
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            stack.push(0)
        } else {
            let cur = stack.pop();
            if(cur == 0) cur = 1
            else cur *= 2;
            stack[stack.length - 1] += cur;
        }
    }
    return stack[0]
};

/*
(()())()
1 + 
*/