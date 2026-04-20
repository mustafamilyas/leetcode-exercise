function maxDistance(colors: number[]): number {
    let maxDistance = 0;
    const n = colors.length;
    for(let i = n - 1; i > 0; i--) {
        if(colors[i] !== colors[0]) maxDistance = Math.max(maxDistance, i);
        if(colors[i] !== colors[n - 1]) maxDistance = Math.max(maxDistance, n - i - 1);
    }
    return maxDistance;
};