function convert(s: string, numRows: number): string {
    const arr = new Array(numRows).fill('');
    let isDown = true;
    let idx = 0;
    for(let i = 0; i < s.length; i++) {
        const arrIdx = idx % numRows;
        arr[arrIdx] += s[i]
        if(isDown && idx % numRows === numRows - 1) {
            isDown = false;
        } else if (!isDown && idx % numRows === 0){
            isDown = true;
        }

        if(isDown) {
            idx++
        } else {
            idx--
        }
    }
    return arr.join('')
};


/**
P A Y P A L I S H I R  I  N  G
0 1 2 3 4 5 6 7 8 9 10 11 12 13

P   A   H   N
0   4   8
A P L S I I G
1 3 5 7 9
Y   I   R
2   6

P     I    N
0
A   L S  I G
1   5
Y A   H R
2 4
P     I
3
 */