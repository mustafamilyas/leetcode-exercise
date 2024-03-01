function maximumOddBinaryNumber(s: string): string {
    let oneCounter = 0;
    for(const c of s) {
        if(c === '1') oneCounter++
    }
    return '1'.repeat(oneCounter - 1) + '0'.repeat(s.length - oneCounter) + '1'.repeat(1)
};