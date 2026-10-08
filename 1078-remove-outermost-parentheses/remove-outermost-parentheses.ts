function removeOuterParentheses(s: string): string {
    let depth = 0, result = "";
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            if(depth > 0) result += s[i]
            depth++;
        } else {
            depth--;
            if(depth > 0) result += s[i]
        }
    }
    return result;
};