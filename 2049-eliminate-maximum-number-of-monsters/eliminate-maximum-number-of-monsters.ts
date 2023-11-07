function eliminateMaximum(dist: number[], speed: number[]): number {
    const monsterToCityConst = dist.map((d, i)=>Math.ceil(d / speed[i]));
    monsterToCityConst.sort((a,b)=>a-b);
    
    for(let round = 2; round <= monsterToCityConst.length; round++) {
        if(round > monsterToCityConst[round - 1]) return round - 1
    }
    return dist.length;
};