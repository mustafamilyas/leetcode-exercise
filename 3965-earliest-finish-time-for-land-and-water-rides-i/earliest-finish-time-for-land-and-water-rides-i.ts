function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    let finishTime = Number.MAX_SAFE_INTEGER;
    let land = [landStartTime[0], landDuration[0]]
    let water = [waterStartTime[0], waterDuration[0]];
    for(let i = 1; i < landStartTime.length; i++) {
        const curFinish = land[0] + land[1];
        const nextFinish = landStartTime[i] + landDuration[i];
        if(curFinish > nextFinish) {
            land = [landStartTime[i], landDuration[i]]
        }
    }
    for(let i = 0; i < waterStartTime.length; i++) {
        const curFinish = water[0] + water[1];
        const nextFinish = waterStartTime[i] + waterDuration[i];
        if(curFinish > nextFinish) {
            water = [waterStartTime[i], waterDuration[i]]
        }
        
        const curFinishLand = land[0] + land[1];
        if(waterStartTime[i] <= curFinishLand) {
            finishTime = Math.min(curFinishLand + waterDuration[i], finishTime);
        } else {
            finishTime = Math.min(nextFinish, finishTime);
        }
    }
    for(let i = 0; i < landStartTime.length; i++) {
        const nextFinish = landStartTime[i] + landDuration[i];
        const curFinishWater = water[0] + water[1];
        if(landStartTime[i] <= curFinishWater) {
            finishTime = Math.min(curFinishWater + landDuration[i], finishTime);
        } else {
            finishTime = Math.min(nextFinish, finishTime);
        }
    }
    return finishTime;
};