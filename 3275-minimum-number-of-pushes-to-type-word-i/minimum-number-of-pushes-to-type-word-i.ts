function minimumPushes(word: string): number {
    let push = 0;
    for(let i = 0; i < word.length; i++) {
        push += Math.trunc(i / 8) + 1;
    }
    return push;
};