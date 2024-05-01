function reversePrefix(word: string, ch: string): string {
    let i = 0, reversed = '';
    for(; i < word.length && word[i] !== ch; i++){
        reversed = word[i] + reversed
    }
    if(i === word.length) return word
    return word[i] + reversed  + word.slice(i + 1)
};