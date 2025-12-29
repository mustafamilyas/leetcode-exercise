function pyramidTransition(bottom: string, allowed: string[]): boolean {
    const nextMap = {};
    for(const block of allowed) {
        const key = block.slice(0, 2);
        const next = block.slice(2);
        if(nextMap[key]) nextMap[key].push(next)
        else nextMap[key] = [next];
    }
    return valid(0, bottom, '');


    function valid(idx: number, cur: string, next: string): boolean {
        if(cur.length == 1) return true;
        if(idx == cur.length - 1) return valid(0, next, '');
        const key = cur.slice(idx, idx + 2);
        const possibleNext = nextMap[key] ?? [];
        for(const p of possibleNext) {
            if(valid(idx + 1, cur, next + p)) return true;
        }
        return false;
    }
};