function maximumOddBinaryNumber(s: string): string {
    let oneCounter = s.split('').filter(c=>c === '1').length
    return '1'.repeat(oneCounter - 1) + '0'.repeat(s.length - oneCounter) + '1'.repeat(1)
};