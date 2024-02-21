/**
5 101  
6 110
7 111
------
4 100

1  0001
2  0010
3  0011
4  0100
5  0101
6  0110
7  0111
8  1000
9  1001
10 1010
------
0  0000
 */
function rangeBitwiseAnd(left: number, right: number): number {
    let res = 0, leftmostLeft = 1, leftmostRight = 1;
    while(leftmostLeft === leftmostRight && leftmostLeft > 0) {
        leftmostLeft = Math.floor(Math.log2(left))
        leftmostRight = Math.floor(Math.log2(right))
        if(leftmostLeft === leftmostRight) {
            const leftmost = 2 ** leftmostRight
            res += leftmost;
            left -= leftmost;
            right -= leftmost;
        }
    };
    return res;
};