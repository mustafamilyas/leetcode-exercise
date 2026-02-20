function makeLargestSpecial(s: string): string {
    const res = [];
    let start = 0;
    let count = 0;
    for(let end = 0; end < s.length; end++) {
        if(s[end] == '1') count++
        else count--

        if(count == 0) {
            res.push(`1${makeLargestSpecial(s.slice(start + 1, end))}0`);
            start = end + 1;
        }
    }
    return res.sort((a, b) => b.localeCompare(a)).join('')
};