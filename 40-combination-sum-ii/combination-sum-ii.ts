function combinationSum2(candidates: number[], target: number): number[][] {
    const result = [];
    const set = candidates.sort((a,b)=>a-b);
    
    function backtrack(combine: number[], sum: number, nextIndex: number) {
        if(sum === target) {
            result.push([...combine])
        } else if (sum < target && nextIndex >= 0) {
            for(let i = nextIndex; i < set.length; i++) {
                if(i > nextIndex && set[i] === set[i-1]) continue;
                
                combine.push(set[i]);
                backtrack(combine, sum + set[i], i + 1);
                combine.pop();
            }
        }
    }
    
    backtrack([], 0, 0);
    
    return result;
};