class UndergroundSystem {
    avgMap: Map<string, {sum: number, people: number}>;
    onSystem: Map<number, {station: string, time: number}>;

    constructor() {
        this.avgMap = new Map();
        this.onSystem = new Map();
    }

    checkIn(id: number, stationName: string, t: number): void {
        if(this.onSystem.has(id)) return;
        this.onSystem.set(id, {station: stationName, time: t});
    }

    checkOut(id: number, stationName: string, t: number): void {
        const peopleOnSystem = this.onSystem.get(id);
        if(!peopleOnSystem) return;
        const {station, time} = peopleOnSystem;
        const key = station + ':' + stationName;
        const avgObj = this.avgMap.get(key);
        const people = (avgObj?.people ?? 0) + 1;
        const sum = (avgObj?.sum ?? 0) + (t - time);
        this.avgMap.set(key, {sum, people});
        this.onSystem.delete(id)
    }

    getAverageTime(startStation: string, endStation: string): number {
        const key = startStation + ':' + endStation;
        const avgObj = this.avgMap.get(key);
        const avg = (avgObj?.sum ?? 0) / (avgObj?.people ?? 1)
        return avg;
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */