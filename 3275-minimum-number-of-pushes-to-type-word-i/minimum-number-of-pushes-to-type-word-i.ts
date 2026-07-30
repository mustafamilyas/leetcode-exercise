function minimumPushes(word: string): number {
    const count = new Array(26).fill(0);
    let push = 0;
    for(let i = 0; i < word.length; i++) {
        const idx = word.charCodeAt(i) - 97;
        count[idx]++;
    }
    count.sort((a, b) => b - a);
    for(let i = 0; i < count.length; i++) {
        const mul = Math.ceil((i + 1) / 8);
        push += mul * count[i]
    }
    return push;
};