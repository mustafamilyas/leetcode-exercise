function canBeValid(s: string, locked: string): boolean {
    if(s.length % 2) return false;
    const openBracketStack = [], unlockedStack = [];
    for(let i = 0; i < s.length; i++) {
        if(locked[i] === '0') unlockedStack.push(i)
        else if(s[i] === '(') openBracketStack.push(i)
        else {
            if(openBracketStack.length) openBracketStack.pop()
            else if(unlockedStack.length) unlockedStack.pop()
            else return false
        }
    }

    while(
        openBracketStack.length &&
        unlockedStack.length &&
        openBracketStack[openBracketStack.length - 1] < unlockedStack[unlockedStack.length - 1] 
    ) {
        openBracketStack.pop();
        unlockedStack.pop()
    }

    return !openBracketStack.length
};