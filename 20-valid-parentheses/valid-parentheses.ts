const OPEN_CHAR_BY_CLOSE_CHAR = {
        ')': '(',
        ']': '[',
        '}': '{'
}

function isValid(s: string): boolean {
    const stack = [];
    for(let c of s.split('')) {
        if(!OPEN_CHAR_BY_CLOSE_CHAR[c]) stack.push(c)
        else if (OPEN_CHAR_BY_CLOSE_CHAR[c] !== stack.pop()) return false;
    }
    return stack.length === 0
};