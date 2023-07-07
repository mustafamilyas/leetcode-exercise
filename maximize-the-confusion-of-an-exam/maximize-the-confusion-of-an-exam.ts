function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let max = 0;
    let lf = 0, lt = 0;
    let prev = 0;
    for(let i = 0; i < answerKey.length; i++) {
        if(answerKey[i] === 'F') lf++
        else lt++
        
        if(lf > k && lt > k) {
            if(answerKey[prev] === 'F') lf--
            else lt--
            prev++
        } else {
            max = Math.max(max, lt + lf)
        }
    }
    return max;
};