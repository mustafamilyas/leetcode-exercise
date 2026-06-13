function mapWordWeights(words: string[], weights: number[]): string {
    let res = '';
    const weightMap: Record<string, number> = {};
    for(let i = 0; i < words.length; i++) {
        const weight = getWeight(words[i]);
        res += String.fromCharCode(122 - weight);
    }
    return res;

    function getWeight(word: string): number {
        if(typeof weightMap[word] == 'number') return weightMap[word]; 
        let sum = 0;
        for(let i = 0; i < word.length; i++) {
            sum += weights[word.charCodeAt(i) - 97];
        }
        weightMap[word] = sum % 26;
        return weightMap[word];
    }
};