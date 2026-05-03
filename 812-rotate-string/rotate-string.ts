function rotateString(s: string, goal: string): boolean {
    if(s.length !== goal.length) return false;
    for(let i = 0; i < s.length; i++) {
        const cur = s.slice(i, goal.length) + s.slice(0, i);
        if(cur == goal) return true;
    } 
    return false;
};

/*
abcde 
bcdea // slice(1, n) + slice(0, 1)

*/