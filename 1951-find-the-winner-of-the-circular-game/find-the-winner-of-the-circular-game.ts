function findTheWinner(n: number, k: number): number {
    const array = new Array(n).fill(0).map((_, idx)=>idx + 1);
    let pos = 0;
    while(array.length > 1) {
        pos = (pos + (k - 1)) % array.length;
        array.splice(pos, 1)
    }
    return array[0]
};