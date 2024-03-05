function minimumLength(s: string): number {
    let done = false;
    let left = 0, right = s.length - 1;
    while(!done && left < right){
        const startLeft = left, startRight = right;
        while(
            left <= right && 
            s[startLeft] === s[startRight] && 
            (s[left] === s[startLeft] || s[right] === s[startLeft])
        ) {
            if(s[left] === s[startLeft]) left++
            if(s[right] === s[startLeft]) right--
        }
        if(s[left] !== s[right]) done = true;
    }
    return Math.max(right - left + 1, 0)
};