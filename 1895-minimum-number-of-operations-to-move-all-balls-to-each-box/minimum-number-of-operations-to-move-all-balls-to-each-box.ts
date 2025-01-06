function minOperations(boxes: string): number[] {
    const result = new Array(boxes.length).fill(0);
    let prev = 0, ones = 0;
    for(let i = 0; i < boxes.length; i++) {
        prev += ones;
        result[i] = prev;
        if(boxes[i] === '1') ones++
    }
    prev = 0, ones = 0;
    for(let i = boxes.length - 1; i >= 0; i--) {
        prev += ones;
        result[i] += prev;
        if(boxes[i] === '1') ones++
    }
    return result;
};
// 0  0  1  0  1  1
// 11 8  5  3  1  0
// 0  0  0  1  2  4