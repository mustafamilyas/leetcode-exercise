function appendCharacters(s: string, t: string): number {
    let tI = 0;
    for(let sI = 0; sI < s.length; sI++) {
        if(s[sI] === t[tI]) tI++
        if(tI === t.length) break;
    }
    return t.length - tI
};