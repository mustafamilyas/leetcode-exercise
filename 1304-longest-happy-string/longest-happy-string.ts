function longestDiverseString(a: number, b: number, c: number): string {
    const count: Array<[string, number]> = [['a', a], ['b', b], ['c', c]]
    count.sort((a, b)=> b[1] - a[1]);
    const lastTwo = count[1][1] + count[2][1]
    const maxIteration = Math.min(Math.ceil(count[0][1] / 2), lastTwo + 1);
    let maxWords = Math.min(Math.ceil(count[0][1] / maxIteration), 2) + Math.ceil(lastTwo / 2 / maxIteration)
    if(lastTwo >= maxIteration) maxWords = count.reduce((acc, cur)=>acc + Math.min(Math.ceil(cur[1] / maxIteration), 2), 0)
    let result = '';
    for(let i = 0; i < maxIteration; i++) {
        let remaining = maxWords;
        for(let k = 0; k < count.length && remaining > 0; k++) {
            const cur = Math.min(2, remaining, Math.ceil(count[k][1] / (maxIteration - i)))
            result += count[k][0].repeat(cur);
            count[k][1] -= cur;
            remaining -= cur;
        }
    }
    return result;
};
