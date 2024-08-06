function minimumPushes(word: string): number {
    const chars = new Array(26).fill(0);
    for(let i = 0; i < word.length; i++) {
        chars[word.charCodeAt(i) - 97]++
    }
    chars.sort((a, b)=>b-a);
    let push = 0;
    for(let i = 0; i < chars.length && chars[i] > 0; i++) {
        push += Math.ceil((i + 1) / 8) * chars[i]
    }
    return push;
};