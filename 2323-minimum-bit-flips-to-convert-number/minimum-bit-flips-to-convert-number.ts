function minBitFlips(start: number, goal: number): number {
    let diff = start ^ goal
    let flip = 0;
    while(diff > 0) {
        if(diff & 1) flip++
        diff >>= 1
    }
    return flip;
};