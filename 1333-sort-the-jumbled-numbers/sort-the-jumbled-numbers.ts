function sortJumbled(mapping: number[], nums: number[]): number[] {
    const mappedNums = nums.map((n)=>[n, mapNumber(n, mapping)])
    mappedNums.sort((a, b)=>a[1]-b[1])
    return mappedNums.map((n)=>n[0])
};

function mapNumber(n: number, mapping: number[]) {
    const ns = n.toString();
    let mappedNumber = '';
    for(let i = 0; i < ns.length; i++) {
        mappedNumber += mapping[ns[i]]
    }
    return parseInt(mappedNumber)
}