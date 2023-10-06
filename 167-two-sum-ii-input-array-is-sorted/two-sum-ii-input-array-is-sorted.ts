function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right - 1) {
        const currentSum = numbers[left] + numbers[right];
        if(currentSum === target) break
        else if (currentSum < target) left++
        else right--
    }
    
    return [left + 1, right + 1]
};