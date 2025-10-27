function numberOfBeams(bank: string[]): number {
    let prev = 0;
    let sum = 0;
    for(const row of bank) {
        let cctv = 0;
        for(let i = 0; i < row.length; i++) {
            if(row[i] == '1') cctv +=1;
        }
        sum += cctv * prev;
        if(cctv > 0) prev = cctv;
    }
    return sum;
};