const mod = 10 ** 9 + 7;
function countPermutations(complexity: number[]): number {
    // check wether invalid
    if(complexity.length == 0 || complexity.slice(1).some((e) => e <= complexity[0])) return 0;
    let result = 1;
    for(let i = 2; i < complexity.length; i++) {
        result = (result * i) % mod;
    }
    return result; 
};