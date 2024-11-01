function makeFancyString(s: string): string {
    let newS = '', counter = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i - 1]) counter++
        else counter = 1;
        if(counter <= 2) newS += s[i]
    }
    return newS
};