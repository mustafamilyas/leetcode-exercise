function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
    if(!hBars.length || !vBars.length) return 0;
    hBars.sort((a, b)=>a-b);
    vBars.sort((a, b)=>a-b);
    let maxConsecutiveH = 0, local = 1, maxConsecutiveV = 0;
    for(let i = 0; i <= hBars.length; i++) {
        if(hBars[i] - hBars[i - 1] == 1) local++;
        else {
            maxConsecutiveH = Math.max(maxConsecutiveH, local);
            local = 1;
        }
    }
    for(let i = 0; i <= vBars.length; i++) {
        if(vBars[i] - vBars[i - 1] == 1) local++;
        else {
            maxConsecutiveV = Math.max(maxConsecutiveV, local);
            local = 1;
        }
    }
    return (Math.min(maxConsecutiveV, maxConsecutiveH) + 1) ** 2;
};