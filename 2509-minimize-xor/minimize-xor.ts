function minimizeXor(num1: number, num2: number): number {
    let setbit = 0;
    while(num2 > 0) {
        setbit += num2 & 1;
        num2 >>= 1;
    }
    const ori = num1.toString(2).split('');
    const next = new Array(ori.length).fill('0');
    for(let i = 0; i < ori.length && setbit > 0; i++) {
        if(ori[i] === '1') {
            next[i] = '1'
            setbit--
        }
    }
    for(let i = ori.length - 1; i >= 0 && setbit > 0; i--) {
        if(ori[i] === '0') {
            next[i] = '1'
            setbit--
        }
    }
    if(setbit > 0) next.unshift('1'.repeat(setbit))
    return parseInt(next.join(''), 2)
};