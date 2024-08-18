function nthUglyNumber(n: number): number {
    if(n <= 6) return n;
    const uglyNumbers = new Array(n)
    uglyNumbers[0] = 1;
    let twoI = 1, threeI = 1, fiveI = 1;
    let twoNext = 2, threeNext = 3, fiveNext = 5;

    for(let i = 1; i < n; i++) {
        uglyNumbers[i] = Math.min(twoNext, threeNext, fiveNext);
        if(twoNext === uglyNumbers[i]) twoNext = uglyNumbers[twoI++] * 2
        if(threeNext === uglyNumbers[i]) threeNext = uglyNumbers[threeI++] * 3
        if(fiveNext === uglyNumbers[i]) fiveNext = uglyNumbers[fiveI++] * 5
    }
    
    return uglyNumbers[n - 1]
};

