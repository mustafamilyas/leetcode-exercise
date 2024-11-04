function compressedString(word: string): string {
    if(word.length == 0) return word;
    let counter = 1, result = '';
    for(let i = 1; i < word.length; i++) {
        if(word[i] === word[i - 1] && counter < 9) counter++
        else {
            result += counter + word[i - 1]
            counter = 1
        }
    }
    return result + counter + word[word.length - 1]
};