function largestGoodInteger(num: string): string {
    let counter = num[0];
    let highest = -1;

    for(let i = 1; i < num.length; i++) {
        if(num[i] === num[i - 1]) {
            counter += num[i]
        } else {
            counter = num[i];
        }

        if(counter.length === 3) {
            highest = Math.max(highest, parseInt(counter))
        }
    }
    if(highest === -1) return '';
    if(highest === 0) return '000'
    return highest.toString();
};