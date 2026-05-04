function findRotation(mat: number[][], target: number[][]): boolean {
    const n = mat.length;
    let good = true;
    for(let i = 0; i < n; i++) {
        for(let k = 0; k < n; k++) {
            if(mat[i][k] !== target[i][k]) {
                good = false;
                break;
            };
        }
    }
    if(good) return true;
    good = true;
    for(let i = 0; i < n; i++) {
        for(let k = 0; k < n; k++) {
            if(mat[i][k] !== target[k][n - i - 1]) {
                good = false;
                break;
            };
        }
    }
    if(good) return true;
    good = true;
    for(let i = 0; i < n; i++) {
        for(let k = 0; k < n; k++) {
            if(mat[i][k] !== target[n - i - 1][n - k - 1]) {
                good = false;
                break;
            };
        }
    }
    if(good) return true;
    for(let i = 0; i < n; i++) {
        for(let k = 0; k < n; k++) {
            if(mat[i][k] !== target[n - k - 1][i]) return false;
        }
    }
    return true;
};

/**
n = 3
0,0 => 0,2
0,1 => 1,1
0,2 => 2,0

 */
