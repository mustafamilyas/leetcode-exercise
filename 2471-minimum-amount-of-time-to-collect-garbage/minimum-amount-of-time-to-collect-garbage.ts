const GARBAGE_TYPES = ['M', 'P', 'G'];

function garbageCollection(garbage: string[], travel: number[]): number {
    const truckEndPosition = {M: -1, P: -1, G: -1};
    let times = 0;

    for(let i = garbage.length - 1; i >= 0; i--) {
        times += garbage[i].length;
        if(truckEndPosition.M < 0 && garbage[i].includes('M')) truckEndPosition.M = i
        if(truckEndPosition.P < 0 && garbage[i].includes('P')) truckEndPosition.P = i
        if(truckEndPosition.G < 0 && garbage[i].includes('G')) truckEndPosition.G = i
    }

    for(let i = 1; i < garbage.length; i++) {
        if(truckEndPosition.M >= i) times += travel[i - 1]
        if(truckEndPosition.P >= i) times += travel[i - 1]
        if(truckEndPosition.G >= i) times += travel[i - 1]
    }
    return times;
};
