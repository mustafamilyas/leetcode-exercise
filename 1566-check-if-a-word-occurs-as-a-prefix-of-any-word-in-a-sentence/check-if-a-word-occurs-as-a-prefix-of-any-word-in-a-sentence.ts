function isPrefixOfWord(sentence: string, searchWord: string): number {
    const idx = sentence.split(' ').findIndex(w => w.startsWith(searchWord));
    return idx < 0 ? idx : idx + 1
};