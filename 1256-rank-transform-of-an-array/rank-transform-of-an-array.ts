function arrayRankTransform(arr: number[]): number[] {
    const uniqueArr = Array.from(new Set(arr));
    uniqueArr.sort((a, b) => a - b);
    const rankMap = {};
    for(let i = 0; i < uniqueArr.length; i++) {
        rankMap[uniqueArr[i]] = i + 1;
    }
    return arr.map((val) => rankMap[val]);
};