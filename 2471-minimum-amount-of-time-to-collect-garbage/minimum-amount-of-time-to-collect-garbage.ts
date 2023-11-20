const GARBAGE_TYPES = ['M', 'P', 'G'];

function garbageCollection(garbage: string[], travel: number[]): number {
    const truckPosition = {M: 0, P: 0, G: 0};
    let times = 0;

    for(let i = 0; i < garbage.length; i++) {
        times += garbage[i].length;
        const garbageNum = getGarbageNum(garbage[i]);
        if(garbageNum.M) moveGarbageTruck('M', i)
        if(garbageNum.P) moveGarbageTruck('P', i)
        if(garbageNum.G) moveGarbageTruck('G', i)
        
    }
    return times;
    /**********************************************************/
    function getGarbageNum(garbage: string) {
        const garbageObj = {M: 0, P: 0, G: 0}
        for(let i = 0; i < garbage.length; i++) {
            garbageObj[garbage[i]]++
        }
        return garbageObj;
    }

    function moveGarbageTruck(type: string, target: number) {
        const startPosition = truckPosition[type] ?? 0;
        for(let i = startPosition; i < target; i++) {
            times += travel[i]
        }
        truckPosition[type] = target;
    }
};
