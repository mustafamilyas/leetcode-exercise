function totalFruit(fruits: number[]): number {
    let max = 1;
    let localMax = 1;
    let prevCount = 1;
    let pair = [fruits[0]]
    
    for(let i = 1; i < fruits.length; i++) {
        if(pair.includes(fruits[i])) {
            localMax++;
            if(fruits[i] === fruits[i - 1]) {
                prevCount++;
            } else {
                prevCount = 1;
            }
        } else {
            if(pair.length === 1) {
                pair.push(fruits[i])
                localMax++;
                prevCount = 1;
            } else {
                max = Math.max(max, localMax);
                localMax = prevCount + 1;
                pair = [fruits[i - 1], fruits[i]]
                prevCount = 1;
            }
        }
    }

    max = Math.max(max, localMax)
    return max;
};