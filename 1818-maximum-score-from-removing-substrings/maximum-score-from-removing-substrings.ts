function maximumGain(s: string, x: number, y: number): number {
    const strInArray = s.split('');
    if(x < y) {
        const temp = x;
        x = y
        y = temp;
        strInArray.reverse()
    }
    let aC = 0, bC = 0, sum = 0
    for(let i = 0; i <= strInArray.length; i++) {
        if(strInArray[i] === 'a') aC++
        else if (strInArray[i] === 'b') {
            if (aC > 0) {
                sum += x
                aC--
            } else {
                bC++
            }
        } else {
            sum += Math.min(aC, bC) * y
            aC = bC = 0
        }
    }
    return sum
};
