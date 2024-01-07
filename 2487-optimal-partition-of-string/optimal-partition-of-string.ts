function partitionString(s: string): number {
    const set = new Set();
    let partition = 1;

    for(const char of s) {
        if(set.has(char)) {
            partition++
            set.clear();
        }
        set.add(char)
    }

    return partition;
};