function minEnd(n: number, x: number): number {
    const nBase2 = (n - 1).toString(2).split('');
    const xBase2 = x.toString(2).split('');
    const res = [];
    let nI = nBase2.length - 1, xI = xBase2.length - 1;
    while(nI >= 0 || xI >= 0) {
        if(nI < 0 || (xI >= 0 && xBase2[xI] === '1')) {
            res.push(xBase2[xI]);
        } else {
            res.push(nBase2[nI--])
        }
        xI--
    }
    return parseInt(res.reverse().join(''), 2)
};