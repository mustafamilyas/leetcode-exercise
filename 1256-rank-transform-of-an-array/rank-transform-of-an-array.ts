function arrayRankTransform(arr: number[]): number[] {
    if(arr.length === 0) return []
    const copy = [...arr]
    copy.sort((a,b)=>a-b);
    const rankingMap: Record<number, number> = {}
    let counter = 0
    for(let i = 0; i < copy.length; i++) {
        if(copy[i] !== copy[i - 1]) rankingMap[copy[i]] = ++counter 
    }
    return arr.map((n)=>rankingMap[n])
};