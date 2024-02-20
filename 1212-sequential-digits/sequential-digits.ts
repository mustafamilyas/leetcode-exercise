function sequentialDigits(low: number, high: number): number[] {
    const lowest = Math.floor(Math.log10(low));
    const highest = Math.floor(Math.log10(high));
    const result = []
    for(let i = lowest; i <= highest; i++) {
        let content = Math.floor(123456789 / (10 ** (9 - i - 1)));
        let adder = Math.floor(111111111 / (10 ** (9 - i - 1)));
        for(let k = 1; k <= 9 - i; k++) {
            if(content >= low && content <= high) result.push(content)
            content += adder
        }
    }
    return result
};