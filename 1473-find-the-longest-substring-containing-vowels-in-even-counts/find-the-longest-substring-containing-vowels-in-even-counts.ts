const chars = {
    a: 1,
    e: 2,
    i: 8,
    o: 16,
    u: 32,
}
function findTheLongestSubstring(s: string): number {
    const firstSeen = new Map<number, number>();
    let longest = 0, current = 0;
    for(let i = 0; i < s.length; i++) {
        current ^= (chars[s[i]] ?? 0);
        if(!firstSeen.has(current) && current) {
            firstSeen.set(current, i)
        }
        longest = Math.max(longest, i - (firstSeen.get(current) ?? -1))
    }
    return longest;
};