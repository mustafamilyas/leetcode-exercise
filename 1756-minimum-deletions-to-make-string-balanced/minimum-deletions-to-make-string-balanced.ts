function minimumDeletions(s: string): number {
    let bCount = 0;
    let deletion = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'b') bCount++
        // delete 'a' or previous b
        else deletion = Math.min(deletion + 1, bCount)
    }
    return deletion;
};