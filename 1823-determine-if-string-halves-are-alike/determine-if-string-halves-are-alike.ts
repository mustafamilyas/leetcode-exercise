const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
function halvesAreAlike(s: string): boolean {
    let vCount = 0;
    let halves = s.length / 2; 
    for(let i = 0; i < s.length; i++) {
        if(i >= halves) {
            if(vowelSet.has(s[i])) vCount--
        } else {
            if(vowelSet.has(s[i])) vCount++
        }
    }
    return vCount === 0;  
};