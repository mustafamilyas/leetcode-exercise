function champagneTower(poured: number, query_row: number, query_glass: number): number {
    const flow = new Array(query_row + 2).fill(null).map(()=> new Array(query_row + 2).fill(0));
    flow[0][0] = poured;

    for(let row = 0; row <= query_row; row++) {
        for(let glass = 0; glass <= row; glass++) {
            const flowthrough = flow[row][glass]
            if(flowthrough > 1) {
                flow[row][glass] = 1;
                const spilled = (flowthrough - 1) / 2 
                flow[row + 1][glass] += spilled
                flow[row + 1][glass + 1] += spilled
            }
        }
    }
    return flow[query_row][query_glass]
};