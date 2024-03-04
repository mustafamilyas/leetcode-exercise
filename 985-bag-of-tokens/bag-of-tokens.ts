function bagOfTokensScore(tokens: number[], power: number): number {
    tokens.sort((a, b)=>a-b)
    if(tokens[0] > power) return 0;
    let left = 0, right = tokens.length - 1;
    let score = 0, maxScore = 0;
    while(left <= right) {
        if(power >= tokens[left]) {
            power -= tokens[left++]
            score++
            maxScore = Math.max(maxScore, score)
        } else {
            score--
            power += tokens[right--];
        }
    }
    return maxScore;  
};