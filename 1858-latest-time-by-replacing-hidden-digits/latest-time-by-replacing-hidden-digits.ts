function maximumTime(time: string): string {
    let newString = '';
    if(time[0] === '?') {
        if(time[1] === '?' || parseInt(time[1]) <= 3) newString += '2'
        else newString += '1'
    }
    else newString += time[0]

    if(time[1] === '?') {
        if(newString[0] === '2') newString += '3'
        else newString += '9'
    } else {
        newString += time[1]
    }
    
    newString += ':'

    if(time[3] === '?') newString += '5'
    else newString += time[3]

    if(time[4] === '?') newString += '9'
    else newString += time[4]

    return newString;
};