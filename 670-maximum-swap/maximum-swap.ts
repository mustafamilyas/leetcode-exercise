function maximumSwap(num: number): number {
    const nstr = num.toString().split('').map(n=>parseInt(n));
    const max = new Array(nstr.length).fill(nstr.length - 1);
    for(let i = max.length - 2; i >= 0; i--) {
        if(nstr[i] > nstr[max[i + 1]]) max[i] = i
        else max[i] = max[i + 1]
    }
    for(let i = 0; i < nstr.length; i++) {
        if(max[i] !== i && nstr[i] !== nstr[max[i]]) {
            const temp = nstr[max[i]];
            nstr[max[i]] = nstr[i];
            nstr[i] = temp;
            return parseInt(nstr.join(''))
        }
    }
    return num;
};