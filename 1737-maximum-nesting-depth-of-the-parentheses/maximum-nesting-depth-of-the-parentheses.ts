function maxDepth(s: string): number {
    let counter = 0, max = 0;
    for(const c of s) {
        if(c === '(') {
            counter++
            max = Math.max(counter, max)
        } else if(c === ')' && counter > 0){
            counter--
        }
    }  
    return max
};