function minDeletionSize(strs: string[]): number {
    const colLength = strs[0].length;
    let deleted = 0;
    for(let col = 0; col < colLength; col++) {
        for(let row = 1; row < strs.length; row++) {
            if(strs[row][col] < strs[row - 1][col]) {
                deleted ++;
                break;
            }
        }
    }
    return deleted;
};