function lengthOfLastWord(s: string): number {
    let counter = 0;
    let i = s.length - 1;
    while((i >= 0 || !counter)) {
        if(s[i] === ' ') {
            if(counter) break;
        } else {
            counter++
        }
        i--
    }
    
    return counter
};