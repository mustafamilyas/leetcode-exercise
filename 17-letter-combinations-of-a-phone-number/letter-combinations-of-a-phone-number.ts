const letters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

function letterCombinations(digits: string): string[] {
    if(digits === '') return []
    const chosenLetters = digits.split('').map(e=>(letters[Number(e)-2].split('')));
    
    let result = chosenLetters[0];
    
    for(let i = 1; i < chosenLetters.length; i++) {
        const tempResult = [];
        for(let j = 0; j < result.length; j++) {
            tempResult.push(...chosenLetters[i].map(e=>result[j] + e));
        }
        result = [...tempResult]
    }
    
    return result;
};