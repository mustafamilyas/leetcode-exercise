function commonChars(words: string[]): string[] {
    const result = [];
    for (const letter of words[0]) {
        if(words.every(word => word.includes(letter))) {
            result.push(letter);
            words = words.map(word => word.replace(letter, ''));
        }
    }
 
    return result;
};