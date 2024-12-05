function canChange(start: string, target: string): boolean {
    let s = 0, t = 0;
    while(s < start.length && t < target.length) {
        for(; s < start.length && start[s] === '_'; s++){}
        for(; t < target.length && target[t] === '_'; t++){}
        if(start[s] !== target[t]) return false;
        if(start[s] === 'L' && t > s) return false;
        if(start[s] === 'R' && t < s) return false;
        s++
        t++
    }
    for(; s < start.length && start[s] === '_'; s++){}
    for(; t < target.length && target[t] === '_'; t++){}
    return t >= target.length && s >= start.length
};