function checkValidCuts(n: number, rectangles: number[][]): boolean {
    const rows = [...rectangles.map((e)=>[e[0], e[2]])];
    const cols = [...rectangles.map((e)=>[e[1], e[3]])];
    return isCanBeSplitted(n, rows) || isCanBeSplitted(n, cols) 
};

function isCanBeSplitted(n: number, rectangles: number[][]): boolean {
    rectangles.sort((a, b)=>a[0] - b[0]);
    let seq = 1, next = rectangles[0][1];
    for(let i = 1; i < rectangles.length; i++) {
        if(next > rectangles[i][0]) next = Math.max(next, rectangles[i][1])
        else {
            next = rectangles[i][1];
            seq++;
        }
    }
    return seq > 2;
}

// rows = [0,1,1,1,0,1,1,1,0,1,0]
// cols = [1,1,0,0,0,0,0,0,0,0,0,0]