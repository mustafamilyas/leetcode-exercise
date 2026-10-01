function isValid(s: string): boolean {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case '(':
            case '[':
            case '{':
                stack.push(s[i]);
                break;
            case ')':
                const a = stack.pop();
                if(a != '(') return false;
                break;
            case ']':
                const b = stack.pop();
                if(b != '[') return false;
                break;
            case '}':
                const c = stack.pop();
                if(c != '{') return false;
                break;
        }
    }
    return stack.length == 0;
};