const letters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

function letterCombinations(digits: string): string[] {
    function combine(combination: string[], nextIndex: number) {
        if(nextIndex === digits.length) {
            return combination;
        }
        const currentNumber = parseInt(digits[nextIndex])
        const currentLetter = letters[currentNumber - 2];
        if(combination.length === 0) return combine(currentLetter.split(''), nextIndex + 1);
        const newCombination = [];
        for(const c of combination) {
            for(const l of currentLetter) {
                newCombination.push(c + l)
            }
        }
        return combine(newCombination, nextIndex + 1)
    }

    ;
    return combine([], 0);
};