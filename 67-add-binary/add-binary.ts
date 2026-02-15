function addBinary(a: string, b: string): string {
    let result = '';
    let carry = 0;
    for(let i = 0; i < a.length || i < b.length; i++) {
        let cur = (parseInt(a[a.length - 1 - i]) || 0) + (parseInt(b[b.length - 1 - i]) || 0) + carry;
        carry = Math.floor(cur / 2);
        result = (cur % 2).toString() + result;
    }
    return (carry ? '1': '' )+  result;
};