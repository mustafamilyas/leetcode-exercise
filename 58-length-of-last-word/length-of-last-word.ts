function lengthOfLastWord(s: string): number {
    let counter = 0;
    let shouldStop = false;
    let i = s.length - 1;
    while((i >= 0 || !counter) && !shouldStop) {
        if(s[i] === ' ') {
            if(counter) {
                shouldStop = true;
            }
        } else {
            counter++
        }
        i--
    }
    
    return counter
};