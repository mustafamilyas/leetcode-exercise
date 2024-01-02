function findMatrix(nums: number[]): number[][] {
    const counter = new Array(200).fill(0);
    let result = [];
    for(const n of nums) {
        const index = counter[n - 1]++;
        if(result[index] == undefined) result.push([]);
        result[index].push(n)
    }
    return result;
};