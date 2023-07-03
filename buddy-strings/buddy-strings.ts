function buddyStrings(s: string, goal: string): boolean {
    if(s.length !== goal.length) return false;
    const diff = [];
    const counter = new Array(26).fill(0);
    let double = false;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== goal[i]) {
            diff.push(i)
            if(diff.length > 2) return false;
        }
        if(++counter[s.charCodeAt(i) - 97] > 1) {
            double = true
        }
    }
    if(diff.length === 0 && double) return true;
    if(diff.length !== 2) return false;
    const [a, b] = diff;
    return s[a] === goal[b] && s[b] === goal[a]
};