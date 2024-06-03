function appendCharacters(s: string, t: string): number {
    let tI = 0;
    for(let sI = 0; sI < s.length && tI < t.length; sI++) {
        if(s[sI] === t[tI]) tI++
    }
    return t.length - tI
};