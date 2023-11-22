function findDiagonalOrder(nums: number[][]): number[] {
    const diagonalRowSubArray = []
    const result = []
    for(let i = 0; i < nums.length; i++) {
        for(let k = 0; k < nums[i].length; k++) {
            if(diagonalRowSubArray[i + k] === undefined) diagonalRowSubArray[i + k] = []
            diagonalRowSubArray[i + k].push(nums[i][k]) 
        }
    }

    for(const row of diagonalRowSubArray) {
        for(let i = row.length - 1; i >= 0; i--) {
            result.push(row[i])
        }
    }

    return result;
};