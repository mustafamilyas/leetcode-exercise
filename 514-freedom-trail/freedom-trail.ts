function findRotateSteps(ring: string, key: string): number {
    const indexAtArray = new Array(26);
    for(let i = 0; i < ring.length; i++) {
        const index = ring.charCodeAt(i) - 97;
        if(indexAtArray[index]) indexAtArray[index].push(i)
        else indexAtArray[index] = [i]
    }
    let keyIndex = 0;
    let distanceMap = new Map<number, number>([[0,0]])
    for(let k = 0; k < key.length; k++) {
        const keyIndex = key.charCodeAt(k) - 97;
        const nextMap = new Map<number, number>();
        distanceMap.forEach((distance, prevIndex)=>{
            for(const nextIndex of indexAtArray[keyIndex]) {
                const nextDistance = distance + getDistance(prevIndex, nextIndex);
                nextMap.set(nextIndex, Math.min(nextDistance, nextMap.get(nextIndex) ?? Infinity));
            }
        })
        distanceMap = nextMap;
    }
    return Math.min(...distanceMap.values()) + key.length

    function getDistance(from: number, to: number) {
        if(from > to) {
            const temp = from;
            from = to;
            to = temp;
        }
        const left = ring.length - to + from;
        const right = to - from;
        return Math.min(left, right)
    }
};