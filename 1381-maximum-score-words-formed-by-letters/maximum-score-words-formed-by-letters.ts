function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    let maxScores = 0;
    const availableLetters = new Array(26).fill(0);

    function backtrack(localAvailableLetters: number[], nextIndex: number, localScores: number) {
        if(words.length === nextIndex) {
            maxScores = Math.max(maxScores, localScores);
            return;
        }
        backtrack(localAvailableLetters, nextIndex + 1, localScores)
        let nextScores = 0;
        let i = 0;
        for(; i < words[nextIndex].length; i++) {
            const index = words[nextIndex].charCodeAt(i) - 97;
            localAvailableLetters[index]--
            if(localAvailableLetters[index] < 0) {
                nextScores = -1
                break;
            } else {
                nextScores += score[index]
            }
        }
        if(nextScores >= 0) {
            backtrack(localAvailableLetters, nextIndex + 1, localScores + nextScores)
            i--
        }
        for(; i >= 0; i--) {
            const index = words[nextIndex].charCodeAt(i) - 97;
            localAvailableLetters[index]++
        }
    }

    for(const l of letters) {
        availableLetters[l.charCodeAt(0) - 97]++
    }

    backtrack(availableLetters, 0, 0);
    return maxScores;
};