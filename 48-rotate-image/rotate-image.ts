/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // reverse the column
    const n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let k = 0; k < (n / 2); k++) {
           const temp = matrix[i][k] 
           matrix[i][k] = matrix[i][n - k - 1]
           matrix[i][n - k - 1] = temp
        }
    }

    for(let i = 0; i < n - 1; i++) {
        for(let k = 0; k < n - i; k++) {
           const temp = matrix[i][k] 
           matrix[i][k] = matrix[n - k - 1][n - i - 1]
           matrix[n - k - 1][n - i - 1] = temp
        }
    }
};

/*
1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16

13 9  5  1
14 10 6  2
15 11 7  3
16 12 8  4

4  3  2  1  
8  7  6  5
12 11 10 9
16 15 14 13

0,0 => 3, 3 n-1, n-1
0,1 => 2, 3 n-2, n-1
1,1 => 2, 2 n-2, n-2
3,0 => 3, 1 n-1, n-3
*/