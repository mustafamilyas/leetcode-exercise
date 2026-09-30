function maxDepthAfterSplit(seq: string): number[] {
    const res = [];
    let depth = 0;
    for(let i = 0; i < seq.length; i++) {
        if(seq[i] == '(') {
            depth++;
            res.push(depth % 2);
        } else {
            res.push(depth % 2);
            depth--;
        }
    }
    return res
};