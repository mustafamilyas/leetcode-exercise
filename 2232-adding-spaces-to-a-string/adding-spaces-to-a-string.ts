function addSpaces(s: string, spaces: number[]): string {
    if(spaces.length === 0) return s;

    let start = 0;
    let res = ''
    for(const sI of spaces) {
        res += s.slice(start, sI) + ' '
        start = sI
    }
    return res + s.slice(start);
};