function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    let countA = {};
    let countB = {};
    const res = [];
    let cumCount = 0;
    for(let i = 0;i < A.length;i++) {
        const ai = A[i], bi = B[i];
        countA[ai] = (countA[ai] ?? 0) + 1; 
        countB[bi] = (countB[bi] ?? 0) + 1;
        if(ai == bi) cumCount++
        else {
            if(countA[ai] <= countB[ai]) cumCount++
            if(countB[bi] <= countA[bi]) cumCount++
        }
        res.push(cumCount)
    }
    return res
};

/**
a = 1,1,1,2
b = 1,2,2,3


 */