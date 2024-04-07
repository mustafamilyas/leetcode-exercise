function checkValidString(s: string): boolean {
    let leftMin = 0, leftMax = 0;

    for (let c of s) {
        if (c === '(') {
            leftMin++;
            leftMax++;
        } else if (c === ')') {
            leftMin--;
            leftMax--;
        } else {
            leftMin--;
            leftMax++;
        }
        if (leftMax < 0) return false;
        if (leftMin < 0) leftMin = 0;
    }
    
    return leftMin === 0;
};

// (((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())
// p 5 w 1
// p 10 w 2
// p 15 w 4
// 