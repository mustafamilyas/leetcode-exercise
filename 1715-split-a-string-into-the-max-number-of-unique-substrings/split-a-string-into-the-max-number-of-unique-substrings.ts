function maxUniqueSplit(s: string): number {
    return recurse(new Set(), 0)

    function recurse(set: Set<string>, nextIndex: number) {
        if(nextIndex === s.length) return set.size
        let max = 0;
        let res = ''
        for(let i = nextIndex; i < s.length; i++) {
            res += s[i]
            if(max >= set.size + s.length - i) break;
            if(set.has(res)) continue
            set.add(res)
            max = Math.max(max, recurse(set, i + 1))
            set.delete(res)
        }
        return max;
    }
};