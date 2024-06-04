function longestPalindrome(s: string): number {
    const counter = new Map<string, number>();
    let sum = 0, oddExist = false;
    for(const c of s) {
        counter.set(c, (counter.get(c) ?? 0) + 1)
    }
    for(const v of counter.values()) {
        if(v % 2) sum += v - 1, oddExist = true
        else sum += v
    }
    return sum + (oddExist ? 1 : 0)
};