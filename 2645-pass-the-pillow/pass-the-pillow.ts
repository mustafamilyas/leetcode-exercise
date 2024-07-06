function passThePillow(n: number, time: number): number {
    const tRound = (n - 1) * 2;
    const mod = time % tRound;
    if(mod < n - 1) return mod + 1;
    return 2 * n - mod - 1
};