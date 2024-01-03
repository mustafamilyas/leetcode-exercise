function numberOfBeams(bank: string[]): number {
    let total = 0;
    let prev = 0;

    for(const row of bank) {
        let cctvs = 0
        for(const col of row) {
            cctvs += parseInt(col)
        }
        if(prev >= 0 && cctvs == 0) continue;
        if(prev >= 0) total += prev * cctvs
        prev = cctvs;
    }
    return total;
};