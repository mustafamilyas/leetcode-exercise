function rotateString(s: string, goal: string): boolean {
    if(s.length !== goal.length) return false;
    const length = s.length;
    let i = 0;
    for(; i < length; i++) {
        let k = 0;
        for(; k < length; k++) {
            if(s[k] !== goal[(i + k) % length]) break;
        }
        if(k === length) return true;
    }
    return false;
};