function constructDistancedSequence(n: number): number[] {
    return backtrack(0, new Array(n * 2 - 1), new Set());
    function backtrack(start: number, seq: number[], seen: Set<number>): number[] {
        const cur = seq.findIndex((e)=>e === undefined)
        if(cur == -1) return seq;
        for(let i = n; i > 0; i--) {
            if(seen.has(i)) continue;
            if(i > 1) {
                if(cur + i >= seq.length || seq[cur + i] !== undefined) continue;
                seq[cur + i] = i;
            }
            seq[cur] = i;
            seen.add(i)
            const next = backtrack(cur + 1, seq, seen);
            if(seen.size === n) return next;
            seq[cur] = undefined;
            if(i > 1) seq[cur + i] = undefined;
            seen.delete(i)
        }
        return []
    }
};