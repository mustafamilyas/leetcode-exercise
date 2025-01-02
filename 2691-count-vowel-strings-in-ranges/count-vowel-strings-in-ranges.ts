const vowels = ['a', 'i', 'u', 'e', 'o'];
const isVowels = (char: string) => vowels.includes(char)
const isSpecial = (word: string) => isVowels(word[0]) && isVowels(word[word.length - 1])
function vowelStrings(words: string[], queries: number[][]): number[] {
    const counter = [];
    let sum = 0;
    const specialWordSet = new Set<string>();
    for(let i = 0; i < words.length; i++) {
        if(isSpecial(words[i])) {
            sum++
            specialWordSet.add(words[i])
        }
        counter.push(sum)
    }
    return queries.map(([start, end]) => specialWordSet.has(words[start]) ? counter[end] - counter[start] + 1 : counter[end] - counter[start] )
};

// 1 1 2 3 4
// 4 3 3 2 1
