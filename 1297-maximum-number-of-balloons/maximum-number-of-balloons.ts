function maxNumberOfBalloons(text: string): number {
    const count = new Array(26).fill(0);
    for(let i = 0; i < text.length; i++) {
        const index = text.charCodeAt(i) - 97;
        count[index]++;
    }
    const b = count[1];
    const a = count[0];
    const l = Math.trunc(count[11] / 2);
    const o = Math.trunc(count[14] / 2);
    const n = count[13];
    return Math.min(b, a, l, o, n)
};