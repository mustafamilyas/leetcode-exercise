function minAddToMakeValid(s: string): number {
    let changes = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') count++
        else {
            if(count === 0) changes++
            else count--
        }
    }
    return count + changes;
};