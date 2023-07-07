function maxConsecutiveAnswers(answerKey: string, k: number): number {
    function maxConsecutiveByChar(char: string): number {
        let max = 0;
        let start = 0;
        let counter = k;
        let end = 0;
        for(; end < answerKey.length; end++) {
            if(char !== answerKey[end]) {
                if(counter > 0){
                    counter--
                } else {
                    max = Math.max(end - start, max)
                    while(answerKey[start] === char) { 
                        start++
                    }
                    start++
                }
            }
        }
        return Math.max(end - start, max)
    }

    return Math.max(maxConsecutiveByChar('T'), maxConsecutiveByChar('F'))
};