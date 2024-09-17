function uncommonFromSentences(s1: string, s2: string): string[] {
    const counter = new Map<string, number>();
    for(const word of s1.split(' ')) {
        counter.set(word, (counter.get(word) ?? 0) + 1)
    }
    for(const word of s2.split(' ')) {
        counter.set(word, (counter.get(word) ?? 0) + 1)
    }
    const result = []
    counter.forEach((value, key)=>{
        if(value === 1) result.push(key)
    }) 
    return result;
};