function largestGoodInteger(num: string): string {
    for(let i = 9; i >= 0; i--) {
        const goodNum = i.toString().repeat(3);
        if(num.includes(goodNum)) return goodNum
    }
    return ''
};