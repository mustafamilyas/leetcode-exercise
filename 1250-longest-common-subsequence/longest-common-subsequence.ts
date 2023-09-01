function longestCommonSubsequence(text1: string, text2: string): number {
    const memo = {};

    function recursive(start1: number, start2: number): number {
        if(start1 === text1.length || start2 === text2.length) {
            return 0;
        }

        const key = `${start1}:${start2}`;
        
        if(memo[key] !== undefined) return memo[key]

        const firstLetter = text1[start1];

        let case1 = recursive(start1 + 1, start2);
        let case2 = 0;
        const firstLetterIndex = findNextIndex(text2, start2, firstLetter);

        if (firstLetterIndex !== -1) {
            case2 = 1 + recursive(start1 + 1, firstLetterIndex + 1)
        }

        memo[key] = Math.max(case1, case2) 

        return memo[key];
    }

    return recursive(0, 0)
};

function findNextIndex(text: string, start: number, char: string) {
    for(let i = start; i < text.length; i++) {
        if(text[i] === char) return i
    }

    return -1
}