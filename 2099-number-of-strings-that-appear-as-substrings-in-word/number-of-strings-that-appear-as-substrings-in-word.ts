function numOfStrings(patterns: string[], word: string): number {
    let num = 0;
    for(const pattern of patterns) {
        if(word.includes(pattern)) {
            num++;
        }
    }
    return num;
};