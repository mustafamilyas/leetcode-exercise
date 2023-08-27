function findLongestChain(pairs: number[][]): number {
    pairs.sort((a,b)=>a[1] - b[1]);
    let max = 1;
    let curEnd = pairs[0][1];

    for(let i = 1; i < pairs.length; i++) {
        if(curEnd < pairs[i][0]) {
            max++;
            curEnd = pairs[i][1]
        }
    }
    return max;
};