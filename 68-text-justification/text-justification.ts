type WordCount = [number, Array<string>];

function fullJustify(words: string[], maxWidth: number): string[] {
    const result: Array<WordCount> = [[0, []]];
    let index = 0;

    for(const w of words) {
        if (result[index] && (result[index][0] + w.length) > maxWidth) {
            result.push([0, []])
            index++;
        }

        result[index][0] += w.length + 1;
        result[index][1].push(w)
    }

    return result.map(([length, arrStrings], index) => {
        let newString = '';
        let allowedSpaces = maxWidth - (length - arrStrings.length)
        

        for(let i = 0; i < arrStrings.length - 1; i++) {
            const maxSpaces = Math.ceil(allowedSpaces / (arrStrings.length - 1 - i));
            const currentSpaces = Math.min(maxSpaces, allowedSpaces);
            
            if(index === result.length - 1) {
                var spaces = ' '
                allowedSpaces --
            } else {
                var spaces = ' '.repeat(currentSpaces < 0 ? 1 : currentSpaces)
                allowedSpaces -= currentSpaces
            }
            
            newString += arrStrings[i] + spaces
        }

        newString += arrStrings[arrStrings.length - 1] + (allowedSpaces ? ' '.repeat(allowedSpaces) : '')

        return newString;
    })
};