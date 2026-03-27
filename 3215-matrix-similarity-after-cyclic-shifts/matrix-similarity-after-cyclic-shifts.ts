function areSimilar(mat: number[][], k: number): boolean {
    const m = mat.length;
    const n = mat[0].length;
    const newK = k % n;
    if(newK == 0) return true;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const nextIndex = ((n - newK + j )% n)
            if(mat[i][j] != mat[i][nextIndex]) return false;
        }
    }
    return true;
};

/*
even shift 3 left
1 2 3 4 5 -3-> 4 5 1 2 3
0 -> 2 (5 - 3 + 0)
1 -> 3 (5 - 3 + 1)
2 -> 4 (5 - 3 + 2)
3 -> 0 (5 - 3 + 3)
4 -> 1 (5 - 3 + 4)

1 2 3 4 5 -4-> 5 1 2 3 4
0 -> 1 (5 - 4 + 0)
1 -> 2 (5 - 4 + 1)
2 -> 3 (5 - 4 + 2)
3 -> 4 (5 - 4 + 3)
4 -> 0 (5 - 4 + 4)

odd shift 4 right
1 2 3 4 5 -3-> 3 4 5 1 2
0 -> 3 (5 - (5 - 3) + 0)
1 -> 4 (5 - (5 - 3) + 1)
2 -> 0 (5 - (5 - 3) + 2)
3 -> 1 (5 - (5 - 3) + 3)
4 -> 2 (5 - (5 - 3) + 4)

1 2 3 4 5 -4-> 2 3 4 5 1
0 -> 4 (5 - (5 - 4) + 0)
1 -> 0 (5 - (5 - 4) + 1)
2 -> 1 (5 - (5 - 4) + 2)
3 -> 2 (5 - (5 - 4) + 3)
4 -> 3 (5 - (5 - 4) + 4)


 */