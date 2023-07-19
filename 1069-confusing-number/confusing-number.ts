function confusingNumber(n: number): boolean {
    let temp = n;
    const rotateNumber = [0, 1, null, null, null, null, 9, null, 8, 6];
    let value = 0;    
    while(temp) {
        const remainder = temp % 10;
        if(rotateNumber[remainder] === null) return false; 
        value = value * 10 + rotateNumber[remainder];
        temp = Math.floor(temp / 10);
    }
    return n !== value;
};