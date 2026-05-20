function countKthRoots(l: number, r: number, k: number): number {
    const left = Math.ceil(getN(k, l));
    const right = Math.ceil(getN(k, r + 1)); 
    return right - left;
};

function getN(x, y) {
  return y ** (1 / x)
}