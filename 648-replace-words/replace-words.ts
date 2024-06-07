function replaceWords(dictionary: string[], sentence: string): string {
    const words = sentence.split(" ");
    for(let i = 0; i < words.length; i++) {
        let rWord = words[i];
        for(const root of dictionary) {
            if(words[i].startsWith(root) && root.length < rWord.length) {
                rWord = root;
            }
        }
        words[i] = rWord;
    }
    return words.join(' ')
};