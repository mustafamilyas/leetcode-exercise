function reversePrefix(word: string, ch: string): string {
    const firstFound = word.indexOf(ch);
    if(firstFound == -1) return word
    return word.slice(0, firstFound + 1).split('').reverse().join('') + word.slice(firstFound + 1)
};