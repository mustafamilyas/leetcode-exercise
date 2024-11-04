function compress(chars: string[]): number {
    if(chars.length === 0) return 0;
    let counter = 1, idx = 0;
    for(let i = 1; i <= chars.length; i++) {
        if(chars[i] === chars[i - 1]) counter++
        else if(counter === 1) chars[idx++] = chars[i - 1]
        else {
            const counterStr = counter.toString();
            chars[idx++] = chars[i - 1]
            for(let k = 0; k < counterStr.length; k++) {
                chars[idx++] = counterStr[k]
            }
            counter = 1;
        }
    }
    return idx;
};