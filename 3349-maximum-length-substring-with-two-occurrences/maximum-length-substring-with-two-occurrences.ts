function maximumLengthSubstring(s: string): number {
    const counter = new Array(26).fill(0);
    let left = 0, max = 0;
    for(let right = 0; right < s.length; right++) {
        const idx = s.charCodeAt(right) - 97;
        counter[idx]++;
        while(left < right && counter[idx] > 2) counter[s.charCodeAt(left++) - 97]--
        max = Math.max(max, right - left + 1)
    }
    return max;
};