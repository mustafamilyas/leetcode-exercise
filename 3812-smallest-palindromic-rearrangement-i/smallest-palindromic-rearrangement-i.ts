function smallestPalindrome(s: string): string {
    const count = new Array(26).fill(0);
    let mid = null, res = '';
    for(let i = 0; i < s.length; i++) {
        const idx = s.charCodeAt(i) - 97;
        count[idx]++;
    }
    for(let i = 0; i < count.length; i++) {
        const half = Math.trunc(count[i] / 2);
        const char = String.fromCharCode(97 + i);
        if(count[i] % 2 == 1) {
            mid = char
            count[i]--;
        };
        count[i] -= half;
        if(half > 0) res += char.repeat(half)
    }
    if(mid != null) res += mid;
    for(let i = count.length - 1; i >= 0; i--) {
        const char = String.fromCharCode(97 + i);
        if(count[i] > 0) res += char.repeat(count[i])
    }
    return res;
};