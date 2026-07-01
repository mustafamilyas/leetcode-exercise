function longestValidParentheses(s: string): number {
    let lastZero = new Array(s.length).fill(Number.MAX_SAFE_INTEGER), counter = 0, longestValid = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            lastZero[counter] = Math.min(lastZero[counter], i) 
            counter++;
        } else {
            lastZero[counter] = Number.MAX_SAFE_INTEGER;
            if(counter > 0) {
                counter--;
                longestValid = Math.max(longestValid, i - lastZero[counter] + 1)
            }
        }
    }
    return longestValid;
};