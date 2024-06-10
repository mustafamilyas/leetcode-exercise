function heightChecker(heights: number[]): number {
    const sortedHeights = [...heights];
    sortedHeights.sort((a,b)=>a-b);
    let diff = 0;
    for(let i = 0; i < heights.length; i++) {
        if(sortedHeights[i] !== heights[i]) diff++
    }
    return diff;
};